import { ObjectId } from "mongodb";
import z from "zod";
import { userSchema } from "@/shared/schema/user.zod";

export const userSchema_Server = userSchema.extend({
    _id: z.instanceof(ObjectId).optional(),
})

export type User = z.infer<typeof userSchema_Server>

export type UserPart = Partial<User>
