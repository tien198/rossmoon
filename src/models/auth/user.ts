import { ObjectId } from "mongodb";
import DocumentAbstract from "../document";
import { User } from "./user.zod";
import { usersCollection } from '../../services/mongoDbCollections'
import bcrypt from "bcryptjs";


export default class UserImp extends DocumentAbstract implements User {
    dbCollection = usersCollection;
    _id?: ObjectId;
    email: string = ''
    name: string = ''
    password: string = ''

    constructor(user: User) {
        super()
        Object.assign(this, user)
    }

    async comparePassword(candidatePassword: string) {
        const isMatched = bcrypt.compare(candidatePassword, this.password)
        return isMatched
    }

    static async create(user: User) {
        const newUser = { ...user }
        newUser.password = await bcrypt.hash(
            user.password!,
            process.env.SALT_LENGTH ?? 10
        )
        const result = await usersCollection.insertOne({ ...newUser, _id: undefined })
        return result
    }
}