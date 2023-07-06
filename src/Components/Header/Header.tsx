import { HeaderContainer, HeaderContent, NewTransectionButton } from './styles'

import LogoImage from '../../assets/LogoImage.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImage} alt="Imagem do logo da ignite" />
        <NewTransectionButton>Nova Transação</NewTransectionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
