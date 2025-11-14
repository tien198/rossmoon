import { getDb } from "./mongoDB";
import { _CollectionPart } from "@/server/type/collection";
import { _ProductPart } from "@/server/type/product";
import { _MagazineFeaturePart } from "@/server/type/magazineFeature";
import { _UserPart } from "@/server/type/user";



export const categoriesCollection = getDb().collection<_CollectionPart>('categories')
export const productsCollection = getDb().collection<_ProductPart>('products')
export const collectionsCollection = getDb().collection<_CollectionPart>('collections')
export const magazineFeaturesCollection = getDb().collection<_MagazineFeaturePart>('magazineFeatures')

export const usersCollection = getDb().collection<_UserPart>('users')