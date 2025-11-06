import z from "zod";

export const userSchema = z.object({
    name: z.string(),
    userName: z.string(),
    email: z.email('Nhập email hợp lệ'),
    password: z.string().min(1, 'Nhập mật khẩu')
})
export type User = z.infer<typeof userSchema>
export type UserPart = Partial<User>



export const loginSchema = userSchema.pick({
    email: true, password: true
})
export type Login = z.infer<typeof loginSchema>

export const signinSchema = loginSchema.extend({
    password: z.string().min(6, 'Mật khẩu phải có hơn 6 ký tự'),
    passwordConfirm: z.string()
}).refine(
    val => val.password === val.passwordConfirm,
    {
        error: 'Xác nhận mật khẩu phải trùng khớp với mật khẩu',
        path: ['passwordConfirm']
    }
)
export type Signin = z.infer<typeof signinSchema>