import { BannerImage } from "./bannerImage";
import { NestedCollection } from "./collection";
import { NestedProduct } from "./product";

export type MagazineFeature = {
    title?: string;
    description?: string;
    bannerImage?: BannerImage;
    products: NestedProduct[];
    collection: NestedCollection;
    createdAt: Date | string | number;
}

export type MagazineFeaturePart = Partial<MagazineFeature>