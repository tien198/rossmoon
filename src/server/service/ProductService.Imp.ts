import ProductRespository from "@/server/respository/ProductRespo";
import { ProductPart } from "@/server/schema/product.zod";
import { ProductServiceConstructor } from "./ProductService";

export default class ProductServiceImp {
    productRespo: ProductRespository<ProductPart>
    constructor(productRespo: ProductRespository<ProductPart>) {
        this.productRespo = productRespo
    }
}

const _check: ProductServiceConstructor = ProductServiceImp


