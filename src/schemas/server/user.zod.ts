import { ObjectId } from "mongodb";
import z from "zod";
import { loginSchema, userSchema } from "../client/user.zod";

export const userSchema_Server = userSchema.extend({
    _id: z.instanceof(ObjectId).nullish(),
})

export type User = z.infer<typeof userSchema_Server>

export type UserPart = Partial<User>

export const loginSchemaServer = loginSchema