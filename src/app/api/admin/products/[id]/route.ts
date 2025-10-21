import ProductImp from "@/models/product";
import { NextResponse } from "next/server";

type Context = {
    params: Promise<{ id: string }>
}

export async function GET(req: Request, context: Context) {
    const prodId = (await context.params)['id']

    try {
        const prod = await ProductImp.findById(prodId)
        if (!prod)
            throw Error('Not found product "' + prodId + '"')
        console.log('---------- product getted');
        
        return NextResponse.json(prod)

    } catch (error: any) {
        console.error({
            [error.name]: error.message
        })

        return NextResponse.json({
            'error': 'Not found product "' + prodId + '"'
        })
    }
}