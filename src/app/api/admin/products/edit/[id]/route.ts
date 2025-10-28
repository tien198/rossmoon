import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    // Bussiness Logic
    // ...
    const token = req.headers.get('authorization')
    console.log('-------- PUT')
    console.log(token)
    const formData = await req.formData()
    const data = Object.fromEntries(formData.entries())
    console.log(data)
    


    return NextResponse.json({

    })
}