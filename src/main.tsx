import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import PostsGallery from './components/ui/postsGallery/postsGallery.tsx'
import MockData from './components/ui/post/MockData.ts'
import type IPost from './models/post.ts'
import PostsContext from './contexts/postsContext.ts'
import SinglePostPage from './components/pages/singlePostPage.tsx'

const posts: IPost[] = [MockData.longPost, MockData.shortPost];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <PostsContext value={posts}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<PostsGallery />} />
              <Route path='post/:id' element={<SinglePostPage />} />
            </Route>
          </Routes>
        </PostsContext>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
