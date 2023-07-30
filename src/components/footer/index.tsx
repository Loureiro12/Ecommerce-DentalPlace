import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  Phone,
} from '@phosphor-icons/react'
import {
  Circle,
  Container,
  ContainerOptions,
  ContainerSocialNetwork,
  Content,
  ContentSocialNetwork,
  Option,
  Wrapper,
} from './styles'

export function Footer() {
  return (
    <>
      <Container>
        <Content>
          <ContainerSocialNetwork>
            <h2>Redes sociais</h2>
            <ContentSocialNetwork>
              <Circle>
                <InstagramLogo weight="bold" />
              </Circle>

              <Circle>
                <FacebookLogo weight="bold" />
              </Circle>
            </ContentSocialNetwork>
          </ContainerSocialNetwork>

          <ContainerOptions>
            <h2>Contato</h2>

            <ul>
              <li>
                <Option>
                  <Phone color="#2F9687" weight="bold" />
                  (00) 0000-0000
                </Option>
              </li>
              <li>
                <Option>
                  <EnvelopeSimple color="#2F9687" weight="bold" />
                  (00) 0000-0000
                </Option>
              </li>
            </ul>
          </ContainerOptions>

          <ContainerOptions>
            <h2>Conheça também</h2>

            <ul>
              <li>
                <Option>Place group</Option>
              </li>
            </ul>
          </ContainerOptions>

          <ContainerOptions>
            <h2>Institucional</h2>

            <ul>
              <li>
                <Option>Quem Somos</Option>
              </li>
              <li>
                <Option>Política de Privacidade</Option>
              </li>
              <li>
                <Option>Trocas, devoluções e reembolso</Option>
              </li>

              <li>
                <Option>Canais de Atendimento</Option>
              </li>

              <li>
                <Option>Política Comercial</Option>
              </li>

              <li>
                <Option>Política de Cookies</Option>
              </li>
            </ul>
          </ContainerOptions>
        </Content>
      </Container>
      <Wrapper>
        <p>Dental Place © 2022</p>
      </Wrapper>
    </>
  )
}
