import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './styles.module.scss'
import { Avatar } from '../Avatar'
import { useState } from 'react';

export function Comment({content , onDeleteComment}) {

const [likeCount, setLikeCount] = useState(0);

function handleLikeComment(){

  setLikeCount((state)=> {
    return state + 1;
  })

}

function handleDeleteComment(){

  onDeleteComment(content);

}

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GugaAAndrade.png" />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
        <header>

          <div className={styles.authorAndTime}>

            <strong>Gustavo Andrade</strong>
            <time title= '10 de fevereiro às 14hrs' dateTime='2024-02-10 14:00:00'>Cerca de 2h atrás</time>

          </div>

          <button onClick={handleDeleteComment} title='Deletar comentário'> 
            <Trash size={24}/>
          </button>


          </header>

          <p>{content}</p>

        </div>

          <footer>
            <button onClick={handleLikeComment}>

              <ThumbsUp size={20}/>
              Aplaudir! <span>{likeCount}</span>
            
            </button>
          </footer>

      </div>

    </div>

  )
}