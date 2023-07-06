import { createContext, useEffect, useState } from 'react'

import { TransactionContextType } from '../interfaces/TransactionsContextType'
import { TransactionsProviderProps } from '../interfaces/TransactionsProviderProps'
import { Transaction } from '../interfaces/Transaction'
import { api } from '../lib/axios'

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string): Promise<void> {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}
