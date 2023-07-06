import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { SummaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

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
