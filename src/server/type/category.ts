import type { Category } from "@/shared/type/category"
import type { ObjectId } from "mongodb";

export interface _Category
    extends Category {
    _id?: ObjectId;
}

export type CategoryPart = Partial<_Category>



export type _NestedCategory = Pick<_Category, "_id" | "name">