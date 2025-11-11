import ProductRespository from "@/server/respository/ProductRespo";
import { ProductPart } from "@/server/schema/product.zod";

export default class ProductService {
    private productRespo: ProductRespository<ProductPart>

    constructor(productRespo: ProductRespository<ProductPart>) {
        this.productRespo = productRespo
    }
}