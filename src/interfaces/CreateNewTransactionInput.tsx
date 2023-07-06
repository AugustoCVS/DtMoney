export interface CreateNewTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
