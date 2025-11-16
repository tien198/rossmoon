// import { ProductRespo } from "@/server/respository/ProductRespo";
import { ProductServiceConstructor } from "./productService";
import ProductRespoImp from "../respository/productRespo.imp";
import ProductImp from "../model/product";
import { _Product } from "@/server/type/product";

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

    // saving the product if it was passing. Otherwise, save product existed in productRespo
    async save(prod?: _Product) {
        if (prod) {
            this.productRespo.model = prod
        }
        return await this.productRespo.save()
    }


    // Getter and Setter for product
    get product(): _Product | undefined {
        return this.productRespo.model
    }
    set product(prod: _Product) {
        this.productRespo.model = prod
    }
}

ProductServiceImp satisfies ProductServiceConstructor<_Product, ProductRespo>


// const service = new ProductServiceImp(new ProductRespoImp(new ProductImp()))