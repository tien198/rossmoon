import { Category as CateClient } from "@/client/schema/category.zod";
import { Category as CateServer } from "@/server/schema/category.zod";

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