import type { WithId, Document, DeleteResult, Filter } from "mongodb";
import type { Product, ProductPart } from "./product.zod";

import { ObjectId } from "mongodb";
import { getDb } from '@/services/mongoDB'
import { Gender } from "@/shared/enums/gender";


const productCollection = getDb().collection('products')

export default class ProductImp implements ProductPart {
    _id?: ObjectId
    collectionId?: ObjectId
    categoryId?: ObjectId

    name?: string
    price?: number

    gender?: Gender
    imageUrls?: string[]
    description?: string

    widht?: number
    height?: number
    depth?: number

    features?: string[]
    origin?: string
    notice?: string
    sustainability?: string
    productCare?: string

    constructor(prod?: ProductPart) {
        Object.assign(this, prod)
    }

    get priceFormatted() {
        const [intPart, decimalPart] = String(this.price).split('.')
        return parseInt(intPart).toLocaleString('vi-VN') + (decimalPart ? (',' + parseInt(decimalPart).toLocaleString('vi-VN')) : '')
    }

    async save() {
        await productCollection.insertOne(this)
    }

    async update() {
        await productCollection.updateOne(
            { _id: this._id },
            { $set: { ...this } }
        )
    }


    static async find(skip?: number, limit?: number) {
        let query = productCollection.find()
        if (skip)
            query = query.skip(skip)
        if (limit)
            query = query.limit(limit)

        return await query.toArray()
    }

    static async findById(id: string | ObjectId) {
        let query: WithId<Document> | null = null
        switch (typeof id) {
            case 'string': {
                query = await productCollection.findOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await productCollection.findOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }

    static async update(filter: Filter<Document>, prod: ProductPart) {
        await productCollection.updateOne(
            { ...filter },
            { ...prod }
        )
    }

    static async deleteById(id: string | ObjectId) {
        let query: DeleteResult | null = null
        switch (typeof id) {
            case 'string': {
                query = await productCollection.deleteOne({ _id: ObjectId.createFromHexString(id) })
                break
            }
            case 'object': {
                if (id instanceof ObjectId)
                    query = await productCollection.deleteOne({ _id: id })
                break
            }
            default: {
                break
            }
        }
        return query
    }


    static async create(prod: Product) {
        const result = await productCollection.insertOne({ ...prod, _id: undefined })
        return result
    }

}

