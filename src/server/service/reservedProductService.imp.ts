import type { ReservedProductServiceConstructor } from "./reservedProductService";
import { ReservedProductRespo } from "../respository/resevedProductRespo.imp";
import { ReservedProduct } from "../type/reservedProduct";



export default class ReservedProductServiceImp {
    reservedProdRespo: ReservedProductRespo

    constructor(reservedProdRespo: ReservedProductRespo) {
        this.reservedProdRespo = reservedProdRespo
    }

    async findById(id: string) {
        return await this.reservedProdRespo.findById(id)
    }
}

ReservedProductServiceImp satisfies ReservedProductServiceConstructor<ReservedProduct>