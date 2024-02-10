import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {

  return (
    <div>

      <Header />

      <Post
         author="Gustavo Andrade"
         content="This is a post by me!"
      />

      <Post 
          author="Gustavo Andrade"
          content="This is another post by me!" 
      />

    </div>
  )
}

