import type { ErrorRes } from '@/client/lib/api/authenAPI'

import { genJWT } from '@/shared/jwtToken'
import { zodValidation } from '@/shared/zod.Validate'
import { Login, loginSchemaServer } from '@/server/schema/user.zod'
import { NextResponse } from 'next/server'
import UserImp from '@/server/model/user'

// POST: {doamin}/api/auth/log-in
export async function POST(req: Request) {
    const formData = await req.formData()

    const submited: Login = {
        email: formData.get('email')?.toString() ?? '',
        password: formData.get('password')?.toString() ?? '',
    }

    const invalid = zodValidation(submited, loginSchemaServer)
    if (Object.keys(invalid).length > 0)
        return NextResponse.json(
            invalid,
            { status: 422 }
        )

    try {
        const loginSuccess = await UserImp.login(submited.email, submited.password)

        if (!loginSuccess) {
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
                    errors: [error.message ?? 'fail to login']
                }
            } as ErrorRes,
            {
                status: 500
            }
        )
    }
}