import { Abortable, Filter, FindOptions, ObjectId } from "mongodb";
import DocumentAbstract from "./document";
import { User } from "../schemas/server/user.zod";
import { usersCollection } from '../services/mongoDbCollections'
import bcrypt from "bcryptjs";


export default class UserImp extends DocumentAbstract<User> implements User {
    static dbCollection = usersCollection;
    dbCollection = usersCollection;
    _id?: ObjectId;
    email: string = ''
    name: string = ''
    password: string = ''

    constructor(user: User) {
        super()
        Object.assign(this, user)
    }

    static async comparePassword(password: string, hash: string) {
        const isMatched = await bcrypt.compare(password, hash)
        return isMatched
    }

    static async login(userName: string, password: string) {
        const user = await this.findOne(
            { email: userName },
            { email: 1, password: 1 }
        )
        if (!user)
            throw new Error(`not found user "${userName}"`)

        const isMatched = await this.comparePassword(password, user.password)
        return isMatched
    }



    // Queries
    static find<T = User>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.find<T>(filter, findOptions)
    }

    static findOne<T = User>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Record<keyof T, (0 | 1)>) {
        return super.findOne<T>(filter, findOptions)
    }

    static findById<T = User>(id: string | ObjectId) {
        return super.findById<T>(id)
    }

    static updateOne<T = User>(filter: Filter<T>, col: Partial<T>) {
        return super.updateOne<T>(filter, col)
    }

    static create<T = User>(col: T) {
        return super.create<T>(col)
    }
}