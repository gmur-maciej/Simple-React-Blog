import { Center, For, Heading, Stack } from '@chakra-ui/react'
import './App.css'
import PostPreview from './components/ui/postPreview/postPreview'
import MockData from './components/ui/postPreview/mockData'

function App() {

  return (
    <Center>
      <Stack align={'start'} maxW={700}>
        <Heading size={'4xl'} m={'0 auto'}>Blog</Heading>
        <For each={[MockData.longPost, MockData.shortPost]}>
          {(post) => (
            <PostPreview post={post} />
          )}
        </For>
      </Stack>
    </Center>
  )
}

export default App
