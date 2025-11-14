import type { _User } from "../type/user";

import { ObjectId } from "mongodb";
import z from "zod";
import { userSchema } from "@/shared/schema/user.zod";

export const userSchema_Server = userSchema.extend({
    _id: z.instanceof(ObjectId).optional(),
}) satisfies z.ZodType<_User>