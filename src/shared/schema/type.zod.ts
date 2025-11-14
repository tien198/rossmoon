import type { Type } from "./type";

import z from "zod";

export const typeSchema = z.object({
    name: z.string(),
}) satisfies z.ZodType<Type>;

