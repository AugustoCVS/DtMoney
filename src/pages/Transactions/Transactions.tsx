import { useContext } from 'react'

import { Header } from '../../Components/Header/Header'
import { Summary } from '../../Components/Summary/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransectionContainer,
  TransectionsTable,
} from './styles'
import { TransactionContext } from '../../contexts/TransactionsContext'

export function Transections() {
  const { transactions } = useContext(TransactionContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransectionContainer>
        <SearchForm />
        <TransectionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransectionsTable>
      </TransectionContainer>
    </div>
  )
}
