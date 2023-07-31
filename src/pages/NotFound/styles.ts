import styled from 'styled-components'

export const Container = styled.div`
  padding: 25px;
`

export const Content = styled.div`
  background-color: ${(props) => props.theme.white};
  max-width: 1420px;
  margin: 0 auto;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  display: flex;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const ImageNotFound = styled.img`
  width: 19.1875rem;
  height: 13.9375rem;

  @media (max-width: 400px) {
    width: 14.75rem;
    height: 10.75rem;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.blue};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: Inter;
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.blue};
  font-style: normal;
  font-family: Inter;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2.5rem;
`

export const ImageLogo = styled.img`
  width: 8.41694rem;
  height: 1.125rem;
`
