import type { ReservedProduct } from "../type/reservedProduct";
import type { ReservedProductRespositoryConstructor } from "./reservedProductRespo.";

import { ObjectId } from "mongodb";
import AppDocumenFactory from "../db/AppDocument/AppDocument.Factory";
import { reservedProductsCollection } from "../db/mongoDbCollections";


const ReservedProductRespoImp = RevervesProductRespoFactory()
export default ReservedProductRespoImp
export type ReservedProductRespo = InstanceType<typeof ReservedProductRespoImp>

export function RevervesProductRespoFactory<T extends ReservedProduct>() {
    return class ProductReserveImp extends AppDocumenFactory<T>() {
        constructor(prod: T) {
            super(reservedProductsCollection, prod);
        }

        async findByProdId(id: string) {
            const query = this.dbCollection.findOne(
                { prodId: ObjectId.createFromHexString(id) } satisfies Partial<ReservedProduct>
            )
            const reserved = await query
            if (!reserved)
                throw Error('Not found any reserved product with id: "' + id + '"')

            return reserved as T
        }

    } satisfies ReservedProductRespositoryConstructor<T>
}