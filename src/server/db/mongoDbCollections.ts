import { getDb } from "./mongoDB";
import { CollectionPart } from "@/server/schema/collection.zod";
import { ProductPart } from "@/server/schema/product.zod";
import { MagazineFeaturePart } from "@/server/schema/magazineFeature.zod";
import { UserPart } from "@/server/schema/user.zod";



export const categoriesCollection = getDb().collection<ProductPart>('categories')
export const productsCollection = getDb().collection<ProductPart>('products')
export const collectionsCollection = getDb().collection<CollectionPart>('collections')
export const magazineFeaturesCollection = getDb().collection<MagazineFeaturePart>('magazineFeatures')

export const usersCollection = getDb().collection<UserPart>('users')