import type { Collection, Document } from "mongodb";

export interface AppDocument<T> {
    dbCollection: Collection<Document>

    save: () => Promise<T>
}

