import type { ReservedProductServiceConstructor } from "./reservedProductService";
import { ReservedProductRespo } from "../respository/reservedProductRespo.imp";
import { ReservedProduct } from "../type/reservedProduct";



export default class ReservedProductServiceImp {
    _reservedProdRespo: ReservedProductRespo

    constructor(reservedProdRespo: ReservedProductRespo) {
        this._reservedProdRespo = reservedProdRespo
    }

    async findByProdId(id: string) {
        return await this._reservedProdRespo.findByProdId(id)
    }
}

export type ReservedProductService = InstanceType<typeof ReservedProductServiceImp>

ReservedProductServiceImp satisfies ReservedProductServiceConstructor<ReservedProduct>