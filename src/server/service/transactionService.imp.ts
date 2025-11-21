import type { QueriesFnc, TransactionServiceContructor } from "./transactionService";

import { client as dbClient } from "../db/mongoDB";



export default class TransactionService {
    _queriesFnc: QueriesFnc
    constructor(queries: QueriesFnc) {
        this._queriesFnc = queries
    }

    async execTransaction() {
        const session = dbClient.startSession()
        await session.withTransaction(async () =>
            await this._queriesFnc(session)
        )
        session.endSession()
        return
    }

    set queriesFnc(queries: QueriesFnc) {
        this._queriesFnc = queries
    }
    get queriesFnc() {
        return this._queriesFnc
    }
}

TransactionService satisfies TransactionServiceContructor