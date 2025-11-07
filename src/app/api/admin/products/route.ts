import { Pagination } from "@/shared/schema/base/pagination";
import ProductDTO from "@/DTO/product";
import ProductRespo from "@/respository/ProductRespoImp";
import { Product } from "@/shared/schema/server/product.zod";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) ?? 0
    const limit = 5
    const skip = page * limit

    const pagination: Pagination<Product | ProductDTO>
        = await ProductRespo.pagination(
            skip, limit,
            { name: 1, attributes: 1, price: 1 }
        )

    pagination.results = pagination.results.map(i => new ProductDTO(i as Product))

    return NextResponse.json(pagination)
}