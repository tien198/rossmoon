import z from "zod";

export const userSchema = z.object({
    name: z.string(),
    email: z.email('Nhập email hợp lệ'),
    password: z.string().min(1,'Nhập mật khẩu')
})

export type User = z.infer<typeof userSchema>

export type UserPart = Partial<User>



export const loginSchema = userSchema.pick({
    email: true, password: true
})

export type Login = z.infer<typeof loginSchema>