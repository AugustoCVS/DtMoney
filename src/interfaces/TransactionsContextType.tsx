import { CreateNewTransactionInput } from './CreateNewTransactionInput'
import { Transaction } from './Transaction'

export interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createNewTransaction: (data: CreateNewTransactionInput) => Promise<void>
}
