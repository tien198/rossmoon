import { ActionData, ErrorRes } from '@/app/(auth)/_actions'
import { Invalid } from '@/app/(auth)/reducer/authReducer'
import { genJWT } from '@/lib/jwtToken'
import UserImp from '@/models/user'
import { Login } from '@/schemas/client/user.zod'
import { loginSchemaServer } from '@/schemas/server/user.zod'
import { NextResponse } from 'next/server'
import z from 'zod'

// POST: {doamin}/api/auth/log-in
export async function POST(req: Request) {
    const formData = await req.formData()

    const submited: Login = {
        email: formData.get('email')?.toString() ?? '',
        password: formData.get('password')?.toString() ?? '',
    }

    const parser = loginSchemaServer.safeParse(submited)

    if (!parser.success) {
        const errorTree = z.treeifyError(parser.error).properties!
        return NextResponse.json(
            errorTree,
            { status: 422 }
        )
    }

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