import LogoFull from '../../../assets/Logo_Full.svg'

import { ShoppingCart, List } from '@phosphor-icons/react'

import { Container, Content, ImageLogo, ButtonMenu } from './styles'

export function EmptyHeader() {
  return (
    <Container>
      <Content>
        <ButtonMenu>
          <List />
        </ButtonMenu>
        <ImageLogo src={LogoFull} alt="Dental Place" />
        <ButtonMenu>
          <ShoppingCart />
        </ButtonMenu>
      </Content>
    </Container>
  )
}
