import { Abortable, Collection, Document, Filter, FindOptions, ObjectId, WithId } from "mongodb";
import AppDocumentImp from "../respository/AppDocumentImp";
import { User, UserPart } from "../shared/schema/server/user.zod";
import { usersCollection } from '../db/mongoDbCollections'
import bcrypt from "bcryptjs";



export default class UserImp extends AppDocumentImp<User> implements User {
    dbCollection: Collection<UserPart>
    static dbCollection = usersCollection;
    _id?: ObjectId;
    email: string = ''
    userName: string = ''
    name: string = ''
    password: string = ''

    constructor(user: User) {
        super(user)
        Object.assign(this, user)
        this.dbCollection = usersCollection
    }

    static async comparePassword(password: string, hash: string) {
        const isMatched = await bcrypt.compare(password, hash)
        return isMatched
    }

    static async login(userName: string, password: string) {
        const user = await this.findOne<User>(
            { email: userName },
            { email: 1, password: 1 }
        )
        if (!user)
            throw new Error(`not found user "${userName}"`)

        const isMatched = await this.comparePassword(password, user.password as string)
        return isMatched
    }

    static async singin(userName: string, password: string) {
        const existed = await this.findOne(
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

        const result = await this.insertOne<UserPart>({
            email: userName, password: hashed
        })
        return result.acknowledged
    }
}
