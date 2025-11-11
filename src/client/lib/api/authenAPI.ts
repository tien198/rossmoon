
import { Z_Invalid } from "@/client/type/zod.ErrorTree";


export type ErrorRes = {
    email?: Z_Invalid
    password?: Z_Invalid
    passwordConfirm?: Z_Invalid
    credential?: Z_Invalid
}

export type SuccessRes = {
    token?: string
}



export async function login(formData: FormData) {
    const res = await fetch(
        process.env.ORIGIN + '/api/auth/log-in',
        {
            method: 'post',
            body: formData
        }
    )

    if (!res.ok) {
        return await res.json() as ErrorRes
    }

    const jwtToken = res.headers.get('Authorization')
    return {
        token: jwtToken
    } as SuccessRes
}


export async function signin(formData: FormData) {
    const res = await fetch(
        process.env.ORIGIN + '/api/auth/sign-in',
        {
            method: 'post',
            body: formData
        }
    )

    if (!res.ok) {
        return await res.json() as ErrorRes
    }

    const jwtToken = res.headers.get('Authorization')
    return await {
        token: jwtToken
    } as SuccessRes
}