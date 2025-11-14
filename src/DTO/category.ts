import type { Category as CateClient } from "@/client/schema/category.zod";
import type { _Category as CateServer } from "@/server/type/category";

export default class CategoryDTO implements CateClient {
    id: string
    name: string
    slug: string
    type: 'collection' | 'product'

    constructor(cate: CateServer) {
        this.id = cate._id?.toString() ?? ''
        this.name = cate.name
        this.slug = cate.slug
        this.type = cate.type
    }

}