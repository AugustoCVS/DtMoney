import { useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'

import { TransactionContextType } from '../interfaces/TransactionsContextType'
import { TransactionsProviderProps } from '../interfaces/TransactionsProviderProps'
import { Transaction } from '../interfaces/Transaction'
import { api } from '../lib/axios'
import { CreateNewTransactionInput } from '../interfaces/CreateNewTransactionInput'

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(
    async (query?: string): Promise<void> => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        },
      })

      setTransactions(response.data)
    },
    [],
  )

  const createNewTransaction = useCallback(
    async (data: CreateNewTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
