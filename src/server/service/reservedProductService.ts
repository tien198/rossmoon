import type { ReservedProductRespo } from "../respository/resevedProductRespo.imp";
import type { ReservedProduct } from "../type/reservedProduct";

export interface ReservedProductServiceConstructor<T extends ReservedProduct> {
    new(reservedProdRespo: ReservedProductRespo): ReservedProductServiceInstance<T>
}

export interface ReservedProductServiceInstance<T extends ReservedProduct> {
    reservedProdRespo: ReservedProductRespo
    findById: (id: string) => Promise<T>
}