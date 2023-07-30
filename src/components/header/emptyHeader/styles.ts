import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 25px 0px;
`
export const Content = styled.div`
  width: 100%;
  max-width: 1420px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageLogo = styled.img`
  width: 8.41694rem;
  height: 1.125rem;
`
export const ButtonMenu = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 1.125rem;
  color: ${(props) => props.theme.blue};
  display: flex;
  align-items: center;
`
