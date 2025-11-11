'use server';

import { ErrorRes, login, signin, SuccessRes } from "@/client/lib/api/authenAPI";
import { Z_Invalid } from "@/client/type/zod.ErrorTree";


export type ActionData = {
    [key: string]: string | Z_Invalid
} & SuccessRes & ErrorRes

export async function loginAction(prevState: ActionData, formData: FormData): Promise<ActionData> {
    try {
        const result = await login(formData)
        return result

    } catch (error) {
        const errorResult = {
            credential: {
                errors: ['Lỗi khi gửi yêu cầu. Xin hãy kiểm tra đường truyền mạng']
            }
        }
        return errorResult
    }

}


export async function signinAction(prevState: ActionData, formData: FormData): Promise<ActionData> {
    try {
        const result = signin(formData)
        return result
    } catch (error) {
        const errorResult = {
            credential: {
                errors: ['Lỗi khi gửi yêu cầu. Xin hãy kiểm tra đường truyền mạng']
            }
        }
        return errorResult
    }
}