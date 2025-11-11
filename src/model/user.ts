import { Abortable, FindOneOptions, ObjectId } from "mongodb";
import { User } from "../shared/schema/server/user.zod";
import { usersCollection } from '../db/mongoDbCollections'
import bcrypt from "bcryptjs";



export default class UserImp implements User {
    static dbCollection = usersCollection;
    _id?: ObjectId;
    email: string = ''
    userName: string = ''
    name: string = ''
    password: string = ''

    constructor(user: User) {
        Object.assign(this, user)
    }

    static async comparePassword(password: string, hash: string) {
        const isMatched = await bcrypt.compare(password, hash)
        return isMatched
    }

    static async login(userName: string, password: string) {
        const user = await this.dbCollection.findOne(
            { email: userName },
            { email: 1, password: 1 } as Omit<FindOneOptions, "timeoutMode"> & Abortable

        )
        if (!user)
            throw new Error(`not found user "${userName}"`)

        const isMatched = await this.comparePassword(password, user.password as string)
        return isMatched
    }

    static async singin(userName: string, password: string) {
        const existed = await this.dbCollection.findOne(
            {
                $or: [
                    { email: userName },
                    { userName: userName }
                ]
            },
            { email: 1 } as Omit<FindOneOptions, "timeoutMode"> & Abortable
        )
        if (existed) {
            throw new Error(`Tài khoản "${userName}" đã tồn tại`)
        }
        const hashed = await bcrypt.hash(password, Number(process.env.SALT_LENGTH) ?? 10)

        const result = await this.dbCollection.insertOne({
            email: userName, password: hashed
        })
        return result.acknowledged
    }
}
