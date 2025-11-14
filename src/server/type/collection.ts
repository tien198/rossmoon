import { Collection } from "@/shared/type/collection";

export interface _Collection
    extends Collection {
    _id?: import("mongodb").ObjectId;
    storyId?: import("mongodb").ObjectId | null;
    subCollections?: import("mongodb").ObjectId[] | null;
};

export type _CollectionPart = Partial<_Collection>



export type _NestedCollection = Pick<
    _Collection,
    "_id" | "slug"
>;
