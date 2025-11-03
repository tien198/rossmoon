import ProductImp from "@/models/product";
import { Product } from "@/schemas/base/product.zod";
import { ObjectId } from "mongodb";

async function editProduct(prodId: string, prod: Product) {
    const result = await ProductImp.updateOne(
        { _id: ObjectId.createFromHexString(prodId) },
        { $set: prod }
    )
    return result
}



const ProductServices = {
    editProduct
}

export default ProductServices