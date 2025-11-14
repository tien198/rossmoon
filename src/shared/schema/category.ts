export type Category = {
    name: string;
    slug: string;
    type: 'collection' | 'product';
}

export type CategoryPart = Partial<Category>



export type NestedCategory = Pick<Category, 'name'>
