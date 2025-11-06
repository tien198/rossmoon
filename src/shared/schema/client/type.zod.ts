import z from "zod";
import { typeSchema } from "../base/type.zod";

export const typeSchema_Client = typeSchema

export type TypeDTO = z.infer<typeof typeSchema_Client>


