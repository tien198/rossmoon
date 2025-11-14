import type { User } from "@/shared/type/user";
import type { ObjectId } from "mongodb";

export interface _User
    extends User {
    _id?: ObjectId
}

export type _UserPart = Partial<_User>
