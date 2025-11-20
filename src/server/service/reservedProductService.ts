import type { ReservedProductRespo } from "../respository/reservedProductRespo.imp";
import type { ReservedProduct } from "../type/reservedProduct";

export interface ReservedProductServiceConstructor<T extends ReservedProduct> {
    new(reservedProdRespo: ReservedProductRespo): ReservedProductServiceInstance<T>
}

export interface ReservedProductServiceInstance<T extends ReservedProduct> {
    _reservedProdRespo: ReservedProductRespo
    findByProdId: (id: string) => Promise<T>
}