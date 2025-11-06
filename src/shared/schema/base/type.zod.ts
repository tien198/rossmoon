import z from "zod";

export const typeSchema = z.object({
    name: z.string(),
})

export type Type = z.infer<typeof typeSchema>


