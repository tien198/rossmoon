import type { WithId, DeleteResult, Filter } from "mongodb";
import type { Product, ProductPart } from "../schemas/server/product.zod";

import { ObjectId } from "mongodb";
import { productsCollection } from "@/services/mongoDbCollections";
import { NestedCategory } from "../schemas/server/category.zod";
import { ProductAttributes } from "../schemas/client/product.attributes.zod";
import DocumentAbstract from "./document";



export default class ProductImp extends DocumentAbstract implements ProductPart {
    dbCollection = productsCollection

    _id?: ObjectId
    name?: string
    slug?: string
    imageUrls?: string[]
    price?: number
    description?: string

    attributes?: ProductAttributes

    features?: string[]
    origin?: string
    notice?: string
    sustainability?: string
    productCare?: string

    category?: NestedCategory

    createdAt?: Date

    constructor(prod?: ProductPart) {
        super()
        Object.assign(this, prod)
    }

    get priceFormatted() {
        const [intPart, decimalPart] = String(this.price).split('.')
        return parseInt(intPart).toLocaleString('vi-VN') + (decimalPart ? (',' + parseInt(decimalPart).toLocaleString('vi-VN')) : '')
    }

    static standardizeProduct(prod: ProductImp) {
        const prodCp = { ...prod }
        return prodCp
    }

    static async findBySlug(slug: string) {
        const query = productsCollection.findOne(
            { 'slug': slug }
            // { projection: { products: 1, title: 1, bannerImage: 1 } }
        )
        const prod = await query
        if (!prod)
            throw Error('Not found product with slug: "' + slug + '"')

        return prod
    }

    static async find(skip?: number, limit?: number) {
        let query = productsCollection.find()
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)

        return await query.toArray()
    }

    static async findOne(filter?: Filter<ProductPart>) {
        return await productsCollection.findOne(filter ? filter : {})
    }

    static async findById(id: string | ObjectId) {
        let query: WithId<ProductPart> | null = null
        switch (typeof id) {
            case 'string': {
                query = await productsCollection.findOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await productsCollection.findOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }

    static async update(filter: Filter<ProductPart>, prod: ProductPart) {
        await productsCollection.updateOne(
            { ...filter },
            { ...prod }
        )
    }

    static async deleteById(id: string | ObjectId) {
        let query: DeleteResult | null = null
        switch (typeof id) {
            case 'string': {
                query = await productsCollection.deleteOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await productsCollection.deleteOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }


    static async create(prod: Product) {
        const result = await productsCollection.insertOne({ ...prod, _id: undefined })
        return result
    }

}

