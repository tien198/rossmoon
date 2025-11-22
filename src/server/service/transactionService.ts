import type { ClientSession } from "mongodb"
import type TransactionServiceImp from './transactionService.imp'



// in mongoDB, transaction queries should be pass session to optionsQuery to determine transaction context
export type QueriesFnc = (session?: ClientSession) => Promise<void>

export interface TransactionServiceContructor {
    new(queries?: QueriesFnc): TransactionServiceInstance
}

export interface TransactionServiceInstance {
    _queriesFnc?: QueriesFnc
    execTransaction: () => Promise<void>
}


export type TransactionService = TransactionServiceImp