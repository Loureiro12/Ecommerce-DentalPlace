import { useState } from 'react'

import * as Menubar from '@radix-ui/react-menubar'

import {
  BookOpen,
  CaretRight,
  CirclesFour,
  ShoppingCart,
  Stethoscope,
  User,
} from '@phosphor-icons/react'

import LogoFull from '../../../assets/Logo_Full.svg'
import { SearchForm } from '../../searchForm'

import {
  Container,
  Content,
  HeaderTop,
  TabsContent,
  TabOption,
  SignContent,
  SignOption,
  SeparatorRoot,
  FooterHeader,
  ImageLogo,
  MenubarRoot,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSubTrigger,
  MenubarSubContent,
  RightSlot,
} from './styles'

export function FullHeader() {
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

            <SeparatorRoot
              decorative
              orientation="vertical"
              style={{ margin: '0 15px', height: 20 }}
            />
            <SignOption>
              <User size={22} />
              Entrar
            </SignOption>
          </SignContent>
        </Content>
        <SeparatorRoot decorative orientation="horizontal" />
      </HeaderTop>
      <FooterHeader>
        <Content>
          <ImageLogo src={LogoFull} alt="Dental Place" />
          <SearchForm />
          <MenubarRoot>
            <Menubar.Menu>
              <MenubarTrigger>
                <CirclesFour weight="bold" />
                Categorias e especialidades
              </MenubarTrigger>
              <Menubar.Portal>
                <MenubarContent align="start" sideOffset={5} alignOffset={-3}>
                  <MenubarItem>Biossegurança</MenubarItem>
                  <MenubarItem>Descartáveis</MenubarItem>
                  <MenubarItem>Moldagem e Modelo</MenubarItem>
                  <MenubarItem>Anestésicos e Agulha Gengival</MenubarItem>
                  <MenubarItem>Moda</MenubarItem>
                  <Menubar.Sub>
                    <MenubarSubTrigger>
                      Share
                      <RightSlot>
                        <CaretRight />
                      </RightSlot>
                    </MenubarSubTrigger>
                    <Menubar.Portal>
                      <MenubarSubContent alignOffset={-5}>
                        <MenubarItem>Email Link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </Menubar.Portal>
                  </Menubar.Sub>
                </MenubarContent>
              </Menubar.Portal>
            </Menubar.Menu>
          </MenubarRoot>
        </Content>
      </FooterHeader>
    </Container>
  )
}
