import type { Filter, FindOptions, Abortable, UpdateFilter, Document } from "mongodb";
import { productsCollection } from "@/db/mongoDbCollections";
import ProductImp from "@/model/product";
import { Product, ProductPart } from "@/shared/schema/server/product.zod";
import { Collection, ObjectId } from "mongodb";
import DocumentAbstract from "@/respository/AppDocumentImp";
import { Pagination } from "@/shared/schema/base/pagination";
import ProductRespositoryConstructor from "./ProductRespo";




const ProductRespoImp: ProductRespositoryConstructor = class extends DocumentAbstract<ProductPart> {
    dbCollection: Collection<ProductPart>
    static dbCollection = productsCollection

    constructor(product: ProductPart) {
        super(product)
        this.dbCollection = productsCollection
    }

    async edit(prodId: string, updated: Product) {
        const result = await this.dbCollection.updateOne(
            { _id: ObjectId.createFromHexString(prodId) },
            { $set: updated }
        )
        return result
    }

    async findBySlug(slug: string) {
        const query = this.dbCollection.findOne(
            { 'slug': slug }
            // { projection: { products: 1, title: 1, bannerImage: 1 } }
        )
        const prod = await query
        if (!prod)
            throw Error('Not found product with slug: "' + slug + '"')

        return new ProductImp(prod)
    }

    async pagination(skip: number = 0, limit: number = 0) {
        const query = this.dbCollection.find()
            .skip(skip).limit(limit + 1)

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

    static updateOne<T = Product>(
        filter: Filter<T>,
        update: UpdateFilter<T> | Document[]
    ) {
        return super.updateOne<T>(filter, update)
    }

    static insertOne<T = Product>(col: T) {
        return super.inserOne<T>(col)
    }

}

export default ProductRespoImp