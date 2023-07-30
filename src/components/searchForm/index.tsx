import { MagnifyingGlass } from '@phosphor-icons/react'

import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="O que você procura?" />
      <button type="submit">
        <MagnifyingGlass size={20} />
      </button>
    </SearchFormContainer>
  )
}
