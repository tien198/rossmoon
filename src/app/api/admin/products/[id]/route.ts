import ProductDTO from "@/DTO/product";
import ProductRespo from "@/server/respository/productRespo.imp";
import ProductServiceImp from "@/server/service/productService.imp";
import { NextResponse } from "next/server";

type Context = {
    params: Promise<{ id: string }>
}

export async function GET(req: Request, context: Context) {
    const prodId = (await context.params)['id']

    try {
        const prodService = new ProductServiceImp(new ProductRespo())
        const prod = await prodService.findById(prodId)
        if (!prod)
            throw Error('Not found product "' + prodId + '"')
        console.log('---------- product getted');

        const prodDTO = new ProductDTO(prod)
        return NextResponse.json(prodDTO)

    } catch (error: any) {
        console.error({
            [error.name]: error.message
        })

        return NextResponse.json({
            'error': 'Not found product "' + prodId + '"'
        })
    }
}