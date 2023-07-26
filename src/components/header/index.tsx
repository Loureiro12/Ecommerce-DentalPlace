import { useState } from 'react'

import {
  BookOpen,
  ShoppingCart,
  Stethoscope,
  User,
} from '@phosphor-icons/react'

import {
  Container,
  Content,
  HeaderTop,
  TabsContent,
  TabOption,
  SignContent,
  SignOption,
  Separator,
} from './styles'

export function Header() {
  const [isTabActive, setIsTabActive] = useState('tab1' || 'tab2')

  return (
    <Container>
      <HeaderTop>
        <Content>
          <TabsContent>
            <TabOption
              onClick={() => setIsTabActive('tab1')}
              isActive={isTabActive === 'tab1'}
              disabled={isTabActive === 'tab1'}
            >
              <BookOpen size={22} weight="bold" />
              Dentista
            </TabOption>

            <TabOption
              onClick={() => setIsTabActive('tab2')}
              isActive={isTabActive === 'tab2'}
            >
              <Stethoscope size={22} weight="bold" />
              Estudante
            </TabOption>
          </TabsContent>

          <SignContent>
            <SignOption>
              <ShoppingCart size={22} />
              Carrinho
            </SignOption>
            <Separator>|</Separator>
            <SignOption>
              <User size={22} />
              Entrar
            </SignOption>
          </SignContent>
        </Content>
      </HeaderTop>
    </Container>
  )
}