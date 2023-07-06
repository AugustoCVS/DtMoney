import { createContext, useEffect, useState } from 'react'

import { TransactionContextType } from '../interfaces/TransactionsContextType'
import { TransactionsProviderProps } from '../interfaces/TransactionsProviderProps'
import { Transaction } from '../interfaces/Transaction'

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactionsFromApi(): Promise<void> {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactionsFromApi()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
