import type { Collection, Document } from "mongodb";

export interface AppDocument<T> {
    dbCollection: Collection<Document>
    model?: T

    save: () => Promise<T>
}

