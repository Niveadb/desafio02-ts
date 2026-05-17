import { ChakraProvider, Box } from '@chakra-ui/react'
import { Header } from './components/Header/Header'
import { Card } from './components/Card'
import { login } from './services/login'

function App() {
  return (
    <ChakraProvider>
      <Box
        minHeight='100vh'
        backgroundColor='#9b4bc7'
        padding='25px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        gap='25px'
      >
        <Header />
        <Card onLogin={login} />
      </Box>
    </ChakraProvider>
  )
}

export default App;
