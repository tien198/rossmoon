import ProductImp from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const prods = await ProductImp.find()
    return NextResponse.json(prods)
}

export async function POST(req: NextRequest) {
    const created = await ProductImp.create({
        name: 'prod', imageUrl: 'none', price: 12, priceFormatted: '12',
        description: "",
        width: 0,
        height: 0,
        depth: 0,
        features: []
    })
    return NextResponse.json(created)
}

export async function DELETE(req: NextRequest) {
    const deleteResult = await ProductImp.deleteById('68b069e88872871c1605f5c5')
    return NextResponse.json(deleteResult)
}
