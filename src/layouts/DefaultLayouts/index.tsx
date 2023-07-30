import { Outlet } from 'react-router-dom'

import { Header } from '../../components/header'
import { Footer } from '../../components/footer'

import { LayoutContainer } from './styles'

export function DefaultLayouts() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
