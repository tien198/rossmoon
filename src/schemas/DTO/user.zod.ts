import z from "zod";
import { loginSchema, signinSchema, userSchema } from "../base/user.zod";

export const userSchema_DTO = userSchema.extend({})
export type User = z.infer<typeof userSchema>
export type UserPart = Partial<User>



export type LoginDTO = z.infer<typeof loginSchema>

export type SigninDTO = z.infer<typeof signinSchema>