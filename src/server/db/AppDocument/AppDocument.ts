import type { ClientSession, Collection, Document } from "mongodb";

export interface AppDocument<T> {
    dbCollection: Collection<Document>
    model?: T

    // if qurery in a TRANSATION, passing the SESSION that derive transation
    save: (session?: ClientSession) => Promise<T>

    findById: (id: string, projection?: Partial<Record<keyof T, 0 | 1>>) => Promise<T>
}

