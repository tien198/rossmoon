export interface Pagination<T> {
    results: T[]
    hasNext: boolean
    hasPrevious: boolean
    /** page number */
    page: number
}