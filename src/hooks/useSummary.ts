import { useContext } from 'react'

import { TransactionContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      const transactionPrice = transaction.price

      if (transaction.type === 'income') {
        acc.income += transactionPrice
        acc.total += transactionPrice
      } else {
        acc.outcome += transactionPrice
        acc.total -= transactionPrice
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
