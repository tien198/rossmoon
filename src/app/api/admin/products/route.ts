import ProductImp from "@/models/product";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const skip = Number(searchParams.get('skip')) ?? 0
    const limit = Number(searchParams.get('limit')) ?? 0

    const page = await ProductImp.pagination(skip, limit)


    return NextResponse.json(page)
}