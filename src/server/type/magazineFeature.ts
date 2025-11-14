import type { MagazineFeature } from "@/shared/type/magazineFeature";
import type { ObjectId } from "mongodb";
import type { _BannerImage } from "./bannerImage";
import type { _NestedCollection } from "./collection";
import type { _NestedProduct } from "./product";

export interface _MagazineFeature
    extends MagazineFeature {
    _id?: ObjectId
    bannerImage?: _BannerImage | null
    products: _NestedProduct[]
    collection: _NestedCollection
};


export type _MagazineFeaturePart = Partial<_MagazineFeature>
