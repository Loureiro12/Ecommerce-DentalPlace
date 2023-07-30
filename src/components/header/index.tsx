import { Container, ContentEmptyHeader, ContentFullHeader } from './styles'

import { EmptyHeader } from './emptyHeader'
import { FullHeader } from './fullHeader'

export function Header() {
  return (
    <Container>
      <ContentFullHeader>
        <FullHeader />
      </ContentFullHeader>

      <ContentEmptyHeader>
        <EmptyHeader />
      </ContentEmptyHeader>
    </Container>
  )
}
