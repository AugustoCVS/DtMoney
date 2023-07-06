import { Header } from '../../Components/Header/Header'
import { Summary } from '../../Components/Summary/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransectionContainer,
  TransectionsTable,
} from './styles'

export function Transections() {
  return (
    <div>
      <Header />
      <Summary />

      <TransectionContainer>
        <SearchForm />
        <TransectionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                {' '}
                <PriceHighLight variant="income"> R$ 12.000,00</PriceHighLight>
              </td>
              <td>Serviço</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Celular</td>
              <td>
                {' '}
                <PriceHighLight variant="outcome">- R$ 5.000,00</PriceHighLight>
              </td>
              <td>Compra</td>
              <td>17/04/2022</td>
            </tr>
          </tbody>
        </TransectionsTable>
      </TransectionContainer>
    </div>
  )
}
