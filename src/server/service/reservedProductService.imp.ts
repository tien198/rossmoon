import type { ReservedProductServiceConstructor } from "./reservedProductService";
import { ReservedProductRespo } from "../respository/resevedProductRespo.imp";
import { ReservedProduct } from "../type/reservedProduct";



export default class ReservedProductServiceImp {
    reservedProdRespo: ReservedProductRespo

    constructor(reservedProdRespo: ReservedProductRespo) {
        this.reservedProdRespo = reservedProdRespo
    }

    async findByProdId(id: string) {
        return await this.reservedProdRespo.findByProdId(id)
    }
}

export type ReservedProductService = InstanceType<typeof ReservedProductServiceImp>

ReservedProductServiceImp satisfies ReservedProductServiceConstructor<ReservedProduct>