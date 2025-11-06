import { Category as CateClient } from "@/shared/schema/client/category.zod";
import { Category as CateServer } from "@/shared/schema/server/category.zod";

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