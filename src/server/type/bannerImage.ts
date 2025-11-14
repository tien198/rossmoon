import type { ObjectId } from "mongodb";
import type { BannerImage } from "@/shared/type/bannerImage";

export interface _BannerImage
    extends BannerImage {
    _id?: ObjectId;
};