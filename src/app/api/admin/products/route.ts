import { Pagination } from "@/shared/schema/pagination";
import ProductDTO from "@/DTO/product";
import { Product } from "@/server/schema/product.zod";
import { NextResponse } from "next/server";
import ProductServiceImp from "@/server/service/ProductService.Imp";
import ProductRespoImp from "@/server/respository/ProductRespo.Imp";
import ProductImp from "@/server/model/product";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) ?? 0
    const limit = 5
    const skip = page * limit

    const prodService = new ProductServiceImp(new ProductRespoImp(new ProductImp()))

    const pagination: Pagination<Product>
        = await prodService.pagination(skip, limit)

    const paginationDTO: Pagination<ProductDTO> = {
        ...pagination,
        results: pagination.results.map(i => new ProductDTO(i))
    }

    return NextResponse.json(paginationDTO)
}