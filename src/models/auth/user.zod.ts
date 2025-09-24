import { ObjectId } from "mongodb";
import z from "zod";

export const userSchema = z.object({
    _id: z.instanceof(ObjectId).nullish(),
    name: z.string(),
    email: z.email(),
    password: z.string()
})

export type User = z.infer<typeof userSchema>

export type UserPart = Partial<User>