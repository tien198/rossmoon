import { Abortable, Filter, FindOptions, ObjectId } from "mongodb";
import DocumentAbstract from "./document";
import { User } from "../schemas/server/user.zod";
import { usersCollection } from '../db/mongoDbCollections'
import bcrypt from "bcryptjs";


export default class UserImp extends DocumentAbstract<User> implements User {
    static dbCollection = usersCollection;
    dbCollection = usersCollection;
    _id?: ObjectId;
    email: string = ''
    userName: string = ''
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

        const isMatched = await this.comparePassword(password, user.password as string)
        return isMatched
    }

    static async singin(userName: string, password: string) {
        const existed = await this.findOne<User>(
            {
                $or: [
                    { email: userName },
                    { userName: userName }
                ]
            },
            {
                email: 1
            }
        )
        if (existed) {
            throw new Error(`Tài khoản "${userName}" đã tồn tại`)
        }
        const hashed = await bcrypt.hash(password, Number(process.env.SALT_LENGTH) ?? 10)

        const result = await this.inserOne({
            email: userName, password: hashed
        })
        return result.acknowledged
    }


    // Queries
    static find<T = User>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
        return super.find<T>(filter, findOptions)
    }

    static findOne<T = User>(filter?: Filter<T>, findOptions?: FindOptions & Abortable & Partial<Record<keyof T, (0 | 1)>>) {
        return super.findOne<T>(filter, findOptions)
    }

    static findById<T = User>(id: string | ObjectId) {
        return super.findById<T>(id)
    }

    static updateOne<T = User>(filter: Filter<T>, col: Partial<T>) {
        return super.updateOne<T>(filter, col)
    }

    static inserOne<T = User>(doc: T) {
        return super.inserOne<T>(doc)
    }
}