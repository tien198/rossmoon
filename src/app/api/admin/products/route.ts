import type { Pagination } from "@/shared/type/pagination";
import type { _Product } from "@/server/type/product";

import { NextResponse } from "next/server";
import ProductDTO from "@/DTO/product";
import ProductServiceImp from "@/server/service/productService.imp";
import ProductRespoImp from "@/server/respository/productRespo.imp";
import ProductImp from "@/server/model/product";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) ?? 0
    const limit = 5
    const skip = page * limit

    const prodService = new ProductServiceImp(new ProductRespoImp(new ProductImp()))

    const pagination: Pagination<_Product>
        = await prodService.pagination(skip, limit)

    const paginationDTO: Pagination<ProductDTO> = {
        ...pagination,
        results: pagination.results.map(i => new ProductDTO(i))
    }

    return NextResponse.json(paginationDTO)
}