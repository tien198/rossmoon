import { productsCollection } from "@/db/mongoDbCollections";
import { ProductPart } from "@/shared/schema/server/product.zod";
import { Abortable, FindOptions, ObjectId } from "mongodb";
import AppDocumentFactory from "@/db/AppDocument/AppDocument.Factory";
import { Pagination } from "@/shared/schema/base/pagination";
import ProductRespositoryConstructor from "./ProductRespo";



const ProductRespoImp = ProductRespoFactory()
export default ProductRespoImp

function ProductRespoFactory<T extends ProductPart>() {
    return class ProductRespoImp extends AppDocumentFactory<T>() {
        static dbCollection = productsCollection

        constructor(product: T) {
            super(product, productsCollection)
        }

        static async edit(prodId: string, updated: ProductPart) {
            const result = await this.dbCollection.findOneAndUpdate(
                { _id: ObjectId.createFromHexString(prodId) },
                { $set: { ...updated } }
            )
            return result
        }

        static async findBySlug(slug: string) {
            const query = this.dbCollection.findOne(
                { 'slug': slug }
                // { projection: { products: 1, title: 1, bannerImage: 1 } }
            )
            const prod = await query
            if (!prod)
                throw Error('Not found product with slug: "' + slug + '"')

            return prod as T
        }

        static async pagination(skip: number = 0, limit: number = 0) {
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
}
