import { BannerImage } from "./bannerImage";
import { NestedCollection } from "./collection";
import { NestedProduct } from "./product";

export type MagazineFeature = {
    title?: string | null;
    description?: string | null;
    bannerImage?: BannerImage| null;
    products: NestedProduct[];
    collection: NestedCollection;
    createdAt: Date | string | number;
}

export type MagazineFeaturePart = Partial<MagazineFeature>