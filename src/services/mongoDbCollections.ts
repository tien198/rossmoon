import { getDb } from "./mongoDB";
import { CollectionPart } from "@/schemas/server/collection.zod";
import { ProductPart } from "@/schemas/server/product.zod";
import { MagazineFeaturePart } from "@/schemas/server/magazineFeature.zod";
import { UserPart } from "@/schemas/server/user.zod";



export const categoriesCollection = getDb().collection<ProductPart>('categories')
export const productsCollection = getDb().collection<ProductPart>('products')
export const collectionsCollection = getDb().collection<CollectionPart>('collections')
export const magazineFeaturesCollection = getDb().collection<MagazineFeaturePart>('magazineFeatures')

export const usersCollection = getDb().collection<UserPart>('users')