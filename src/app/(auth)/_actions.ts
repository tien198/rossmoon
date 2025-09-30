'use server';

import { Login, loginSchema } from "@/schemas/client/user.zod"
import { redirect } from "next/navigation"
import z from "zod"
import { Invalid } from "./reducer/authReducer";


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
    redirect('/')
}