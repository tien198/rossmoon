import z from "zod";
import { User } from "../type/user";

export const userSchema = z.object({
    name: z.string(),
    userName: z.string(),
    email: z.email('Nhập email hợp lệ'),
    password: z.string().min(1, 'Nhập mật khẩu')
}) satisfies z.ZodType<User>