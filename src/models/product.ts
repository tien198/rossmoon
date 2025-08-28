import type { WithId, Document, DeleteResult } from "mongodb";
import type { Product } from "./product.zod";

import { ObjectId } from "mongodb";
import { getDb } from '@/services/mongoDB'


const productCollection = getDb().collection('products')

export default class ProductImp implements Product {
    name: string
    price: number
    imageUrl: string

    constructor() {
        this.name = 'no name'
        this.price = 12
        this.imageUrl = 'none-url'
    }

    async save() {
        await productCollection.insertOne(this)
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
            default: {
                query = await productCollection.findOne({ _id: id })
                break
            }
        }
        return query
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
        const result = await productCollection.insertOne(prod)
        return result
    }

}