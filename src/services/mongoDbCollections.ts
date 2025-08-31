import { getDb } from "./mongoDB";

export const productCollection = getDb().collection('products')

export const collectionCollection = getDb().collection('collections')

