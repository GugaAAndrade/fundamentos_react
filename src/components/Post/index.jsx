import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './styles.module.scss'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'


export function Post({author, publishedAt, content}) {

	const [newCommentText, setNewCommentText] = useState('')

	const [comments, setComments] = useState([])

	const publishedDateTimeFormatted = format(new Date(publishedAt), "d 'de' LLLL 'às' HH:mm'h'",{locale: ptBR})
	const publishedDateTimeContent = formatDistanceToNow(new Date(publishedAt), {locale: ptBR,
	addSuffix: true})

	// const publishedDateTimeFormatted = new Intl.DateTimeFormat('pt-BR', {
	// 	day: '2-digit',
	// 	month: 'long',
	// 	hour: '2-digit',
	// 	minute: '2-digit',
	// }).format(publishedAt)

	function handleNewCommentChange(){
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function handleCreateNewComment(){
		event.preventDefault()
		
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function deleteComment(commentToDelete){
		const commentsWithouDeletedOne = comments.filter(comment =>{
			return comment !== commentToDelete
		})

		setComments(commentsWithouDeletedOne)

	}

	function handleNewCommentInvalid(){
		event.target.setCustomValidity('Por favor, preencha o campo de comentário')
	}	

	const isNewCommentTextEmpty = newCommentText.trim().length === 0

  return (

	<article className={styles.post}>
		<header>
			<div className={styles.author}>

				<Avatar hasBorder={true} src={author.avatarUrl} />

				<div className={styles.authorInfo}>
					<strong>{author.name}</strong>
					<span>{author.role}</span>
					
				</div>

			</div>

			<time title= {publishedDateTimeFormatted} dateTime={publishedAt.toISOString()}>{publishedDateTimeContent}</time>
		</header>

		<div className={styles.content}>

				{content.map(line => {
					switch(line.type){
						case 'paragraph':
							return <p key={line.content}>{line.content}</p>
						case 'link':
							return <p key={line.content}> <a href="#">{line.content}</a> </p>
				}})}

		</div>

		<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
			<strong>Leave your feedback!</strong>
			
			<textarea
				required
				name='comment'
				onChange={handleNewCommentChange}
				value={newCommentText}
				placeholder='Deixe um comentário'
				onInvalid={handleNewCommentInvalid}
			/>
			
			<footer>
				<button type='submit' disabled={isNewCommentTextEmpty}>
					Comentar
				</button>
			</footer>
		</form>

		<div className={styles.commentList}>

			{comments.map(comment =>{
				return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
			
			})}
			
		</div>

	</article>
	)
}
