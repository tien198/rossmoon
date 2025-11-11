import ProductRespository from "@/server/respository/ProductRespo";
import { ProductPart } from "@/server/schema/product.zod";

export interface ProductServiceConstructor {

    new(productRespo: ProductRespository<ProductPart>): ProductServiceInstance
}

export interface ProductServiceInstance {
    productRespo: ProductRespository<ProductPart>
}