import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalSyle } from './styles/global'
import { Transections } from './pages/Transactions/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />

      <TransactionsProvider>
        <Transections />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
