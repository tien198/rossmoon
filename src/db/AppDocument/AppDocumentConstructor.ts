import type { Abortable, Collection, DeleteResult, Document, Filter, FindCursor, FindOptions, InsertOneResult, ObjectId, UpdateFilter, UpdateResult, WithId } from "mongodb";

export interface AppDocumentConstructor<T> {
    new(): any
    dbCollection: Collection<any>

    find: (filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>)
        => FindCursor<T>

    findOne: (filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>)
        => Promise<T | null>

    findById: (id: string | ObjectId, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>)
        => Promise<WithId<T> | null>

    updateOne: (
        filter: Filter<T>,
        update: UpdateFilter<T> | Document[]
    )
        => Promise<UpdateResult>

    deleteById: (id: string | ObjectId)
        => Promise<DeleteResult | null>

    insertOne: (doc: T)
        => Promise<InsertOneResult<T>>
}