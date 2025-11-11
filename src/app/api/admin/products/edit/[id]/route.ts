import { unflatten } from "@/shared/unflatten";
import { Product } from "@/shared/schema/product.zod";
import ProductRespo from "@/server/respository/ProductRespo.Imp";
import { NextResponse } from "next/server";

type Context = {
    params: Promise<{
        id: string
    }>
}

export async function PUT(req: Request, context: Context) {

    const prodId = (await context.params).id

    const token = req.headers.get('authorization')

    const formData = await req.formData()
    const flattenData = Object.fromEntries(formData.entries())
    const prod = unflatten<Product>(flattenData)

    try {
        const result = await ProductRespo.edit(prodId, prod)
        return NextResponse.json({})
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            'Fail to edit product with id: ' + prodId,
            { status: 500 }
        )
    }

}