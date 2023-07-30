import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  height: 50px;
  width: 40%;

  input {
    flex: 1;
    border-radius: 6px 0px 0px 6px;
    border: 0;
    background: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: ${(props) => props.theme.green};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 6px 6px 6px 6px;
    cursor: pointer;
    margin-left: -2px;

    &:hover {
      opacity: 0.7;
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: opacity 0.2s;
    }
  }
`
