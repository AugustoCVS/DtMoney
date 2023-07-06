import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'

import { SummaryCard, SummaryContainer } from './styles'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
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

  function ChangeTotalBackground() {
    if (summary.total < 0) {
      return 'red'
    } else {
      return 'green'
    }
  }

  return (
    <SummaryContainer>
      <SummaryCard textvariant="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard textvariant="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>- {priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant={ChangeTotalBackground()}>
        <header>
          <span>Saldo</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
