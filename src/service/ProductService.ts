import ProductRespository from "@/respository/ProductRespo";

export default class ProductService {
    private productRespo: ProductRespository
    
    constructor(productRespo: ProductRespository) {
        this.productRespo= productRespo
    }
}