import { Center, Input, Box } from '@chakra-ui/react'
import { Button } from './Button'

interface ICard {
  onLogin: () => void
}

export const Card = ({ onLogin }: ICard) => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='20px' width='100%' maxWidth='400px'>
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder='email' marginTop='20px' />
      <Input placeholder='password' type='password' marginTop='10px' />
      <Center>
        <Button onClick={onLogin} marginTop='15px'>
          Entrar
        </Button>
      </Center>
    </Box>
  )
}
