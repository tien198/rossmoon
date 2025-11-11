import ProductRespository from "@/respository/ProductRespo";
import { ProductPart } from "@/shared/schema/server/product.zod";

export default class ProductService {
    private productRespo: ProductRespository<ProductPart>

    constructor(productRespo: ProductRespository<ProductPart>) {
        this.productRespo = productRespo
    }
}