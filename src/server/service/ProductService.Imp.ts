// import { ProductRespo } from "@/server/respository/ProductRespo";
import { ProductServiceConstructor } from "./ProductService";
import ProductRespoImp from "../respository/ProductRespo.Imp";
import ProductImp from "../model/product";
import { Product } from "../schema/product.zod";

type ProductRespo = InstanceType<typeof ProductRespoImp>

export default class ProductServiceImp {
    // Singleton ( Constructor Return Overide )
    productRespo: ProductRespo = new ProductRespoImp(new ProductImp())
    constructor(productRespo: ProductRespo) {
        this.productRespo = productRespo
    }

    async findById(id: string) {
        return await this.productRespo.findByid(id)
    }

    async findBySlug(slug: string) {
        return await this.productRespo.fin1dBySlug(slug)
    }

    async pagination(skip: number = 0, limit: number = 0) {
        return await this.productRespo.pagination(skip, limit)
    }

    async save(prod: Product) {
        this.productRespo.model = prod
        return this.productRespo.save()
    }
}

ProductServiceImp satisfies ProductServiceConstructor<Product, ProductRespo>


// const service = new ProductServiceImp(new ProductRespoImp(new ProductImp()))