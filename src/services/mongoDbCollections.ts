import { CollectionPart } from "@/models/collection.zod";
import { getDb } from "./mongoDB";
import { ProductPart } from "@/models/product.zod";

export const productCollection = getDb().collection<ProductPart>('products')

export const collectionCollection = getDb().collection<CollectionPart>('collections')

