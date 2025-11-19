import { unflatten } from "@/shared/unflatten";
import { NextResponse } from "next/server";
import ProductRespoImp from "@/server/respository/productRespo.imp";
import ProductImp from "@/server/model/product";
import ProductDTO from "@/DTO/product";
import ProductServiceImp from "@/server/service/productService.imp";
import MediaServiceImp from "@/server/service/MediaService.imp";

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
    const prod = unflatten<ProductDTO>(flattenData)

    try {
        const prodService = new ProductServiceImp(
            new ProductRespoImp(
                new ProductImp(prod)
            ),
            new MediaServiceImp()
        )
        const result = await prodService.save()

        return NextResponse.json({})
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            'Fail to edit product with id: ' + prodId,
            { status: 500 }
        )
    }

}