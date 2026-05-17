import { Button as ChakraButton } from '@chakra-ui/react'
import { ReactNode, MouseEventHandler } from 'react'

interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  colorScheme?: string
  size?: string
  width?: string
  marginTop?: string
}

export const Button = ({
  onClick,
  children,
  colorScheme = 'purple',
  size = 'sm',
  width = '100%',
  marginTop = '5px'
}: IButton) => {
  return (
    <ChakraButton
      onClick={onClick}
      colorScheme={colorScheme}
      size={size}
      width={width}
      marginTop={marginTop}
    >
      {children}
    </ChakraButton>
  )
}
