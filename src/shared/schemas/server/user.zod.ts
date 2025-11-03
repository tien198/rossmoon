import { ObjectId } from "mongodb";
import z from "zod";
import { loginSchema, signinSchema, userSchema } from "../base/user.zod";

export const userSchema_Server = userSchema.extend({
    _id: z.instanceof(ObjectId).nullish(),
})

export type User = z.infer<typeof userSchema_Server>

export type UserPart = Partial<User>

export const loginSchemaServer = loginSchema
export type Login = z.infer<typeof loginSchemaServer>

export const signinSchemaServer = signinSchema
export type Signin = z.infer<typeof signinSchemaServer>