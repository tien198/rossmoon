import { Product } from "@/schemas/base/product.zod";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
    // Bussiness Logic
    // ...
    const token = req.headers.get('authorization')
    console.log('-------- PUT')
    console.log(token)
    const formData = await req.formData()
    const data = Object.fromEntries(formData.entries())
    const prod = unflatten<Product>(data)
    console.log(prod)
    
    return NextResponse.json({

    })
}



type AnyObject = Record<string, any>;

function unflatten<T extends AnyObject>(flat: AnyObject) {
    const result: AnyObject = {};

    const tokenRe = /([^\.\[\]]+)|\[(\d+)\]/g;

    for (const key in flat) {
        if (!Object.prototype.hasOwnProperty.call(flat, key)) continue;
        const value = flat[key];

        // parse tokens: e.g. "medias[0].url" -> ["medias", 0, "url"]
        const parts: (string | number)[] = [];
        let m: RegExpExecArray | null;
        while ((m = tokenRe.exec(key)) !== null) {
            if (m[1] !== undefined) parts.push(m[1]);
            else parts.push(Number(m[2]));
        }

        let curr: any = result;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            const isLast = i === parts.length - 1;
            const nextPart = parts[i + 1];

            if (typeof part === 'string') {
                // ensure container exists
                if (isLast) {
                    curr[part] = value;
                } else {
                    if (!(part in curr) || typeof curr[part] !== 'object') {
                        // decide array or object based on next token
                        curr[part] = typeof nextPart === 'number' ? [] : {};
                    }
                    curr = curr[part];
                }
            } else { // number index
                // curr must be an array (it should have been created when we saw the string key before the [index])
                if (!Array.isArray(curr)) {
                    // replace empty object with array if safe
                    // (this handles rare cases where structure was not pre-created)
                    const newArr: any[] = [];
                    // copy existing enumerable props if any (edge-case)
                    for (const k in curr) {
                        if (Object.prototype.hasOwnProperty.call(curr, k)) {
                            (newArr as any)[k] = (curr as any)[k];
                        }
                    }
                    // find parent and reassign would be complicated here; to keep simple,
                    // assume well-formed flattened keys (string before [index]) so this rarely runs.
                    curr = newArr;
                }

                if (isLast) {
                    curr[part] = value;
                } else {
                    if (curr[part] == null || typeof curr[part] !== 'object') {
                        curr[part] = typeof nextPart === 'number' ? [] : {};
                    }
                    curr = curr[part];
                }
            }
        }
    }

    return result as T;
}