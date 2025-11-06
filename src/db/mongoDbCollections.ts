import { getDb } from "./mongoDB";
import { CollectionPart } from "@/shared/schema/server/collection.zod";
import { ProductPart } from "@/shared/schema/server/product.zod";
import { MagazineFeaturePart } from "@/shared/schema/server/magazineFeature.zod";
import { UserPart } from "@/shared/schema/server/user.zod";



export const categoriesCollection = getDb().collection<ProductPart>('categories')
export const productsCollection = getDb().collection<ProductPart>('products')
export const collectionsCollection = getDb().collection<CollectionPart>('collections')
export const magazineFeaturesCollection = getDb().collection<MagazineFeaturePart>('magazineFeatures')

export const usersCollection = getDb().collection<UserPart>('users')