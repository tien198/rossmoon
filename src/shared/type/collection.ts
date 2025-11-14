import { BannerImage } from "./bannerImage";
import { NestedCategory } from "./category";

export type Collection = {
    name: string;
    slug: string;
    bannerImage?: BannerImage | null | undefined;
    type: 'collection' | 'sub-collection' | 'edit';
    category?: NestedCategory | null | undefined;
    createdAt: Date | string | number;
}

export type CollectionPart = Partial<Collection>






export type NestedCollection = Pick<Collection, 'slug'>

