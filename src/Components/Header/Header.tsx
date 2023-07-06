import * as Dialog from '@radix-ui/react-dialog'

import { HeaderContainer, HeaderContent, NewTransectionButton } from './styles'
import LogoImage from '../../assets/LogoImage.svg'
import { NewTransectionModal } from '../NewTransactionModal/NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="Imagem do logo da ignite" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransectionButton>Nova Transação</NewTransectionButton>
          </Dialog.Trigger>

          <NewTransectionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
