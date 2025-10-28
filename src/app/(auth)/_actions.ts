'use server';

import { Invalid } from "./reducer/authReducer";

export type ErrorRes = {
    email?: Invalid
    password?: Invalid
    passwordConfirm?: Invalid
    credential?: Invalid
}

export type SuccessRes = {
    token?: string
}

export type ActionData = {
    [key: string]: string | Invalid
} & SuccessRes & ErrorRes

export async function loginAction(prevState: ActionData, formData: FormData): Promise<ActionData> {
    // const submited= Object.fromEntries(formData.entries()) as User
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
    return await {
        token: jwtToken
    } as SuccessRes
}


export async function signinAction(prevState: ActionData, formData: FormData): Promise<ActionData> {
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