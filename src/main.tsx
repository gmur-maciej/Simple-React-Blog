import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import PostsGallery from './components/ui/postsGallery/postsGallery.tsx'
import Post from './components/ui/post/post.tsx'
import MockData from './components/ui/post/MockData.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<PostsGallery />} />
            <Route path='post/:id' element={<Post post={MockData.longPost}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
