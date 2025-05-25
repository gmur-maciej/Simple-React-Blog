import { Center, For, Heading, Stack } from '@chakra-ui/react'
import './App.css'
import type IPost from './models/post'
import PostPreview from './components/ui/postPrevies'

const posts: IPost[] = [
  {
    title: "First post",
    content: "Some content to display there"
  }
]

function App() {

  return (
    <Center>
      <Stack align={'start'}>
        <Heading size={'4xl'}>Blog</Heading>
        <For each={posts}>
          {(post) => (
            <PostPreview post={post} />
          )}
        </For>
      </Stack>
    </Center>
  )
}

export default App
