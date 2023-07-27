import styled from 'styled-components'

export const ButtonContainer = styled.button`
  font-weight: bold;
  padding: 0 1.375rem;
  border-radius: 8px;
  align-items: center;
  display: flex;
  gap: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`
