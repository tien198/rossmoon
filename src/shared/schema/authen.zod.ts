import z from "zod"
import { userSchema } from "./user.zod"
import { Login, Signin } from "../type/authen"



export const loginSchema = userSchema.pick({
    email: true, password: true
}) satisfies z.ZodType<Login>



export const signinSchema = loginSchema.extend({
    password: z.string().min(6, 'Mật khẩu phải có hơn 6 ký tự'),
    passwordConfirm: z.string()
}).refine(
    val => val.password === val.passwordConfirm,
    {
        error: 'Xác nhận mật khẩu phải trùng khớp với mật khẩu',
        path: ['passwordConfirm']
    }
) satisfies z.ZodType<Signin>