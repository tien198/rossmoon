import ProductImp from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(req:NextRequest) {
    const prods = await ProductImp.find()
    return NextResponse.json(prods)    
}

export async function POST(req:NextRequest) {
    const created = await ProductImp.create({
        name:'prod', imageUrl:'none', price:12
    })
    return NextResponse.json(created)
}