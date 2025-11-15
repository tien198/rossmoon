import type { Pagination } from "@/shared/type/pagination";
import type { ProductRespositoryConstructor } from "./productRespo";
import type { _Product } from "@/server/type/product";

import { productsCollection } from "@/server/db/mongoDbCollections";
import { Abortable, FindOptions, ObjectId } from "mongodb";
import AppDocumentFactory from "@/server/db/AppDocument/AppDocument.Factory";



const ProductRespoImp = ProductRespoFactory()
export default ProductRespoImp


function ProductRespoFactory<T extends _Product>() {
    const BaseClass = AppDocumentFactory<T>()
    const ProductRespoImp = class extends BaseClass {
        static dbCollection = productsCollection

        constructor(product: T) {
            super(product, productsCollection)
        }

        async findById(id: string) {
            const query = this.dbCollection.findOne(
                { '_id': ObjectId.createFromHexString(id) }
                // { projection: { products: 1, title: 1, bannerImage: 1 } }
            )
            const prod = await query
            if (!prod)
                throw Error('Not found product with id: "' + id + '"')

            return prod as T
        }

        async findBySlug(slug: string) {
            const query = this.dbCollection.findOne(
                { 'slug': slug }
                // { projection: { products: 1, title: 1, bannerImage: 1 } }
            )
            const prod = await query
            if (!prod)
                throw Error('Not found product with slug: "' + slug + '"')

            return prod as T
        }

        async pagination(skip: number = 0, limit: number = 0) {
            const query = this.dbCollection.find(
                {},
                { name: 1, attributes: 1, price: 1, medias: 1 } as FindOptions & Abortable
            )
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
            } as Pagination<T>
        }
    }
    return ProductRespoImp satisfies ProductRespositoryConstructor<T>
}
