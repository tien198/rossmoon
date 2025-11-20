import type { ReservedProduct } from "../type/reservedProduct";


export interface ReservedProductRespositoryConstructor<T extends ReservedProduct> {

    new(model: T): ReservedProductRespositoryInstance<T>
}

export interface ReservedProductRespositoryInstance<T extends ReservedProduct> {
    findByProdId: (id: string) => Promise<T>

}
