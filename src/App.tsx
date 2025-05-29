import { Center, Stack } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import TopBar from './components/ui/topBar/topBar'

function App() {

  return (
    <Center>
      <Stack maxW={700}>
        <TopBar />
        <Outlet />
      </Stack>
    </Center>
  )
}

export default App
