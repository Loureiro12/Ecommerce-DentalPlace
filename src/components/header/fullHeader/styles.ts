import styled from 'styled-components'

import * as Separator from '@radix-ui/react-separator'
import * as Menubar from '@radix-ui/react-menubar'

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
  padding: 5px 5px 1.25rem 5px;
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

export const FooterHeader = styled.div`
  margin-top: 30px;
`

export const ImageLogo = styled.img`
  width: 11.1375rem;
  height: 1.52875rem;
`

export const MenubarRoot = styled(Menubar.Root)`
  display: flex;
  background-color: transparent;
  padding: 3px;
  border-radius: 6px;
`

export const MenubarTrigger = styled(Menubar.Trigger)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  color: ${(props) => props.theme.black};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  border: 0;
  background-color: transparent;
  cursor: pointer;

  &[data-state='open'] [data-highlighted] {
    background-color: ${(props) => props.theme.blue};
  }
`

export const MenubarContent = styled(Menubar.Content)`
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 10px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const MenubarItem = styled(Menubar.Item)`
  all: unset;
  font-size: 16px;
  line-height: 1;
  color: ${(props) => props.theme.blue};
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 5px 10px;
  position: relative;
  user-select: none;
  cursor: pointer;

  &[data-highlighted] {
    background-image: linear-gradient(135deg, #1e2144 0%, #1e2144 100%);
    color: ${(props) => props.theme.white};
  }
`

export const MenubarSubTrigger = styled(Menubar.SubTrigger)`
  all: unset;
  font-size: 16px;
  line-height: 1;
  color: ${(props) => props.theme.blue};
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 5px 10px;
  position: relative;
  user-select: none;

  &[data-state='open'] {
    background-color: ${(props) => props.theme['green-100']};
    color: ${(props) => props.theme.blue};
  }

  &[data-highlighted] {
    background-image: linear-gradient(135deg, #1e2144 0%, #1e2144 100%);
    color: ${(props) => props.theme.white};
  }
`

export const MenubarSubContent = styled(Menubar.SubContent)`
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: ${(props) => props.theme['gray-500']};
`
