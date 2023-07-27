import React from 'react'

import { ButtonContainer } from './styles'
import { Icon } from '@phosphor-icons/react'

interface ButtonProps {
  label: string
  icon?: Icon
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonComponent({ label, icon, ...rest }, ref) {
    return (
      <ButtonContainer {...rest} ref={ref}>
        {icon}
        {label}
      </ButtonContainer>
    )
  },
)
