import { Center, Heading, Stack } from '@chakra-ui/react'
import { Outlet } from 'react-router'

function App() {

  return (
    <Center>
      <Stack maxW={700}>
        <Heading size={'4xl'} m={'0 auto'}>Blog</Heading>
        <Outlet />
      </Stack>
    </Center>
  )
}

export default App
