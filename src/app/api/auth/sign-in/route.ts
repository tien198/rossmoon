import { ErrorRes } from "@/app/(auth)/_actions"
import { genJWT } from "@/services/jwtToken"
import { zodValidation } from "@/services/zodValidate"
import UserImp from "@/models/user"
import { Signin, signinSchemaServer } from "@/schemas/server/user.zod"
import { NextResponse } from "next/server"

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