import styled from 'styled-components'

export const Container = styled.div``

export const ContentFullHeader = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`
export const ContentEmptyHeader = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`
