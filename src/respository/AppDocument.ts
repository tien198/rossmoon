import type { Collection, Document } from "mongodb";

export interface AppDocumentInstance<T> {
    dbCollection: Collection<Document>

    save: () => Promise<T>
}

