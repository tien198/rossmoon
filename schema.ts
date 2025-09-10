import { ObjectId } from "mongodb"

export type Collection = {
    _id: ObjectId,
    name: string
    subCollections: SubCollection[]
}

export type SubCollection = {
    _id: ObjectId
    name: string
    imageUrl: string
}

export type Product = {
    _id: ObjectId
    name: string
    price: number
}

export type SubCollection_Product = {
    _id: ObjectId
    subcollectionId: ObjectId // reference SubCollection 
    productId: ObjectId //reference Product
}