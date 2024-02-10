import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './app.module.scss'

export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          
          <Post
            author="Gustavo Andrade"
            content="This is a post by me!"
          />

          <Post 
              author="Gustavo Andrade"
              content="This is another post by me!" 
          />
        </main>

      </div>


    </div>
  )
}

