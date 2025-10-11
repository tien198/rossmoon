export interface Pagination<T> {
    results: T[]
    hasNext: boolean
}