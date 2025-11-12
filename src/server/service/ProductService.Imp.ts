import ProductRespository from "@/server/respository/ProductRespo";
import { Product } from "@/server/schema/product.zod";
import { ProductServiceConstructor } from "./ProductService";

export default class ProductServiceImp {
    productRespo: ProductRespository<Product>
    constructor(productRespo: ProductRespository<Product>) {
        this.productRespo = productRespo
    }
}

const _check: ProductServiceConstructor = ProductServiceImp


