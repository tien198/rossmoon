import type { Filter, FindOptions, Abortable } from "mongodb";
import type { Product, ProductPart } from "../schemas/server/product.zod";

import { ObjectId } from "mongodb";
import { productsCollection } from "@/services/mongoDbCollections";
import { NestedCategory } from "../schemas/server/category.zod";
import { ProductAttributes } from "../schemas/client/product.attributes.zod";
import DocumentAbstract from "./document";



export default class ProductImp extends DocumentAbstract<Product> implements ProductPart {
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




    // Queries
    static find<T = Product>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return DocumentAbstract.find<T>(filter, findOptions)
    }

    static findOne<T = Product>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return DocumentAbstract.findOne<T>(filter, findOptions)
    }

    static findById<T = Product>(id: string | ObjectId) {
        return DocumentAbstract.findById<T>(id)
    }

    static updateOne<T = Product>(filter: Filter<T>, col: Partial<T>) {
        return DocumentAbstract.updateOne<T>(filter, col)
    }

    static create<T = Product>(col: T) {
        return DocumentAbstract.create<T>(col)
    }
}

