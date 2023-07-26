import styled from 'styled-components'

import * as Separator from '@radix-ui/react-separator'

interface buttonTabProps {
  isActive: boolean
}

export const Container = styled.h1`
  background-color: ${(props) => props.theme.white};
  padding: 25px 0px;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderTop = styled.div``

export const TabsContent = styled.div`
  display: flex;
  gap: 1.63rem;
`

export const TabOption = styled.button<buttonTabProps>`
  font-size: 1rem;
  color: ${(props) => (props.isActive ? props.theme.green : props.theme.black)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;
  display: flex;
  gap: 0.5rem;

  background-color: transparent;
  border: 0px;
  cursor: pointer;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? props.theme.green : 'transparent')};

  padding: 5px 5px 1.25rem 5px;

  &:hover {
    color: ${(props) => props.theme.green};
    transition: opacity 0.2s;
  }
`

export const SignContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SignOption = styled.button`
  font-size: 1rem;
  color: ${(props) => props.theme.black};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;
  display: flex;
  gap: 0.5rem;

  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.green};
    transition: opacity 0.2s;
  }
`

export const SeparatorRoot = styled(Separator.Root)`
  background: ${(props) => props.theme['gray-200']};

  &[data-orientation='horizontal'] {
    height: 1px;
    width: 100%;
  }
  &[data-orientation='vertical'] {
    height: 100%;
    width: 1px;
  }
`
