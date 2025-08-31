import z from "zod";

export default function zDate() {
    return z.union([
        z.string(), z.number(), z.date()
    ]).refine(
        val => {
            switch (typeof val) {
                case 'string': {
                    return !isNaN(Date.parse(val))
                }
                case 'number': {
                    return !isNaN(val)
                }
                default: {
                    return true
                }
            }
        },
        'invalid date'
    )
}