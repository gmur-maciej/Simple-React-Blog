import { Center, Heading, Stack } from '@chakra-ui/react'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <Center>
      <Stack align={'start'} maxW={700}>
        <Heading size={'4xl'} m={'0 auto'}>Blog</Heading>
        <Outlet />
      </Stack>
    </Center>
  )
}

export default App
