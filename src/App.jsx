import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './app.module.scss'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GugaAAndrade.png',
      name: 'Gustavo Andrade',
      role: 'Software Engineer'
  },
      publishedAt: new Date('2024-02-10 14:00:00'),
      content: [
        {type: 'paragraph', content: 'Fala galeraa, Guga aqui 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: 'jane.design/doctorcare'},
      ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykeesa.png',
      name: 'Mayke Erick',
      role: 'Developer'
    },
    publishedAt: new Date('2024-02-11 17:56:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ]
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Developer'
    },
    publishedAt: new Date('2024-01-11 13:23:00'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ]
  }

]
export function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            )
          })}
        </main>

      </div>


    </div>
  )
}

