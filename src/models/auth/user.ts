import { ObjectId } from "mongodb";
import DocumentAbstract from "../document";
import { User } from "./user.zod";
import { usersCollection } from '../../services/mongoDbCollections'

export default class UserImp extends DocumentAbstract implements User {
    dbCollection = usersCollection;
    _id?: ObjectId;
    email: string = ''
    name: string = ''
    password: string = ''

    constructor() {
        super()
    }

}