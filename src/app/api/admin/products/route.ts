import ProductImp from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const page = Number(searchParams.get('page')) ?? 0
    const limit = 10
    const skip = page * limit
    const result = await ProductImp.pagination(skip, limit)

    return NextResponse.json(result)
}