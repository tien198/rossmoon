import type { ErrorRes } from "@/client/lib/api/authenAPI"

import { genJWT } from "@/shared/jwtToken"
import { zodValidation } from "@/shared/zod.Validate"
import { Signin, signinSchemaServer } from "@/server/schema/user.zod"
import { NextResponse } from "next/server"
import UserImp from "@/server/model/user"

// POST: {doamin}/api/auth/sign-in
export async function POST(req: Request) {
    const formData = await req.formData()

    const submited: Signin = {
        email: formData.get('email')?.toString() ?? '',
        password: formData.get('password')?.toString() ?? '',
        passwordConfirm: formData.get('passwordConfirm')?.toString() ?? ''
    }

    const invalid = zodValidation(submited, signinSchemaServer)
    if (Object.keys(invalid).length > 0)
        return NextResponse.json(
            invalid,
            { status: 422 }
        )

    try {

        const signinSuccess = await UserImp.singin(submited.email, submited.password)

        if (!signinSuccess) {
            return NextResponse.json(
                {
                    credential: {
                        errors: ['wrong user or password']
                    }
                } as ErrorRes,
                { status: 401 }
            )
        }

        const jwtToken = await genJWT(submited)
        return NextResponse.json(
            '',
            {
                status: 200,
                headers: {
                    'Authorization': 'bearer ' + jwtToken
                }
            }
        )
    } catch (error: any) {
        return NextResponse.json(
            {
                credential: {
                    errors: [error.message ?? 'fail to signin']
                }
            } as ErrorRes,
            { status: 500 }
        )
    }
}