import { Pagination } from "@/shared/schema/pagination";
import ProductDTO from "@/DTO/product";
import ProductRespo from "@/server/respository/ProductRespo.Imp";
import { Product, ProductPart } from "@/server/schema/product.zod";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) ?? 0
    const limit = 5
    const skip = page * limit

    const pagination: Pagination<ProductPart | ProductDTO>
        = await ProductRespo.pagination(skip, limit)

    pagination.results = pagination.results.map(i => new ProductDTO(i as Product))

    return NextResponse.json(pagination)
}