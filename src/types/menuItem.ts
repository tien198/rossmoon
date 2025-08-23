export type MenuItem = {
    display: 'link' | 'cate',
    nameDisplay: string
    categoryItems?: MenuItem[]
    url?: string
}