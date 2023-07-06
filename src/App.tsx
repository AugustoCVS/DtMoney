import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/defaultTheme'
import { GlobalSyle } from './styles/global'
import { Transections } from './pages/Transections/Transections'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalSyle />
      <Transections />
    </ThemeProvider>
  )
}
