import type { Type } from "../type/type";

import z from "zod";

export const typeSchema = z.object({
    name: z.string(),
}) satisfies z.ZodType<Type>;

