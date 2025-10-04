import z from "zod";

export function zodValidation<T>(val: T, schema: z.ZodObject) {
    const invalid: Record<string, Record<'errors', string[]> | undefined> = {}
    const parser = schema.safeParse(val)
    if (!parser.success) {
        const errorTree = z.treeifyError(parser.error)
        const errorProperties = errorTree.properties
        for (const key in errorProperties) {
            if (Object.hasOwn(errorProperties, key)) {
                invalid[key] = errorProperties[key];
            }
        }
    }
    return invalid
}
