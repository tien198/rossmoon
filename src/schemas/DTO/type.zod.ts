import z from "zod";
import { typeSchema } from "../base/type.zod";

export const typeSchema_DTO = typeSchema.extend({})

export type TypeDTO = z.infer<typeof typeSchema_DTO>


