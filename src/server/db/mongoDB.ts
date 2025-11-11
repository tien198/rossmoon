import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI
const NODE_ENV = process.env.NODE_ENV

if (!MONGODB_URI)
    throw new Error(".env is missing 'Mongo URI' field");

let client: MongoClient = new MongoClient(MONGODB_URI)



declare global {
    var _mongoClient: MongoClient | undefined
}

switch (NODE_ENV) {
    case 'development': {
        if (!global._mongoClient) {
            client = new MongoClient(MONGODB_URI)
            global._mongoClient = await client.connect()
        }
        break
    }
    default: {
        client = await new MongoClient(MONGODB_URI, {
            minPoolSize: 2
        }).connect()
        break
    }
}

export function getDb() {
    return client.db('rossmoon')
}