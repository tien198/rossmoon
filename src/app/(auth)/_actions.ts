'use server';

import { Login, loginSchema } from "@/schemas/client/user.zod"
import z from "zod"
import { Invalid } from "./reducer/authReducer";
import UserImp from "@/models/user";


type ActionData = {
    [key: string]: any
    email?: Invalid
    password?: Invalid
}

export async function loginAction(prevState: ActionData, formData: FormData): Promise<ActionData> {
    // const submited= Object.fromEntries(formData.entries()) as User

    const submited: Login = {
        email: formData.get('email')?.toString() ?? '',
        password: formData.get('password')?.toString() ?? '',
    }

    const parser = loginSchema.safeParse(submited)

    if (!parser.success) {
        const errorTree = z.treeifyError(parser.error).properties!
        return errorTree
    }

    const lo = await UserImp.login(submited.email, submited.password)

    return {}
}