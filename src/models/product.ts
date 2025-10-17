import type { Filter, FindOptions, Abortable } from "mongodb";
import type { Product, ProductPart } from "../schemas/server/product.zod";

import { ObjectId } from "mongodb";
import { productsCollection } from "@/services/mongoDbCollections";
import type { ProductAttributes } from "../schemas/base/product.attributes.zod";
import type { NestedCategory } from "../schemas/server/category.zod";
import DocumentAbstract from "./document";
import { Pagination } from "@/schemas/base/pagination";



export default class ProductImp extends DocumentAbstract<Product> implements ProductPart {
    dbCollection = productsCollection
    static dbCollection = productsCollection


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

    static async pagination(skip?: number, limit?: number) {
        let query = this.find()
        if (!skip)
            skip = 0
        if (!limit)
            limit = 0
        query = query.skip(skip).limit(limit + 1)

        const prods = await query.toArray()
        const hasNext = prods.length > limit

        if (hasNext)
            prods.pop()
        return {
            results: prods,
            hasNext,
            hasPrevious: !!(skip > 0),
            page: skip / limit
        } as Pagination<Product>
    }


    // Queries
    static find<T = Product>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.find<T>(filter, findOptions)
    }

    static findOne<T = Product>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.findOne<T>(filter, findOptions)
    }

    static findById<T = Product>(id: string | ObjectId) {
        return super.findById<T>(id)
    }

    static updateOne<T = Product>(filter: Filter<T>, col: Partial<T>) {
        return super.updateOne<T>(filter, col)
    }

    static insertOne<T = Product>(col: T) {
        return super.inserOne<T>(col)
    }
}

