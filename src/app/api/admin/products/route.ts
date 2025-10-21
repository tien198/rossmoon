import { Pagination } from "@/schemas/base/pagination";
import ProductDTO from "@/DTO/product";
import ProductImp from "@/models/product";
import { Product } from "@/schemas/server/product.zod";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) ?? 0
    const limit = 5
    const skip = page * limit

    const pagination: Pagination<Product | ProductDTO>
        = await ProductImp.pagination(
            skip, limit,
            { name: 1, attributes: 1, price: 1 }
        )

    pagination.results = pagination.results.map(i => new ProductDTO(i as Product))

    return NextResponse.json(pagination)
}