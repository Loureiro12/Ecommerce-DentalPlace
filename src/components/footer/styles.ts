import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.blue};
  padding: 25px 0px;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (min-width: 452px) {
    width: 100%;
  }
`

export const ContainerSocialNetwork = styled.div`
  h2 {
    color: ${(props) => props.theme.green};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Inter;
    margin-top: 10px;

    margin-bottom: 10px;
  }
`

export const ContentSocialNetwork = styled.div`
  display: flex;
  gap: 10px;
`

export const Circle = styled.button`
  background-color: ${(props) => props.theme.white};
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  cursor: pointer;

  color: ${(props) => props.theme.blue};
  font-size: 1.125rem;
`

export const ContainerOptions = styled.p`
  h2 {
    color: ${(props) => props.theme.green};
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Inter;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
  }
`

export const Option = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-family: Inter;
  align-items: center;
  gap: 5px;
  display: flex;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-family: Inter;
  border-top: 0.5px solid ${(props) => props.theme.white};
`
