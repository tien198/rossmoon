import { CollectionPart } from "@/models/collection.zod";
import { getDb } from "./mongoDB";
import { ProductPart } from "@/models/product.zod";
import { MagazineFeaturePart } from "@/models/magazineFeature.zod";
import { UserPart } from "@/models/auth/user.zod";



export const categoriesCollection = getDb().collection<ProductPart>('categories')
export const productsCollection = getDb().collection<ProductPart>('products')
export const collectionsCollection = getDb().collection<CollectionPart>('collections')
export const magazineFeaturesCollection = getDb().collection<MagazineFeaturePart>('magazineFeatures')

export const usersCollection = getDb().collection<UserPart>('users')