import notFound from '../../assets/notFound.png'
import LogoFull from '../../assets/Logo_Full.svg'

import {
  Container,
  Content,
  ImageNotFound,
  Title,
  SubTitle,
  ImageLogo,
} from './styles'

export function NotFound() {
  return (
    <Container>
      <Content>
        <div>
          <ImageNotFound src={notFound} alt="Imagem de página não encontrada" />
          <Title>Ops...</Title>
          <SubTitle>
            O link que você tentou acessar não está disponível
          </SubTitle>
          <ImageLogo src={LogoFull} alt="Dental Place" />
        </div>
      </Content>
    </Container>
  )
}
