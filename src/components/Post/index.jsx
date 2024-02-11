import styles from './styles.module.scss'

export function Post() {
  return (
	<article className={styles.post}>
		<header>
			<div className={styles.author}>

				<img className={styles.avatar}src="https://github.com/GugaAAndrade.png" />	

				<div className={styles.authorInfo}>
					<strong>Gustavo Andrade</strong>
					<span>Developer</span>
					
				</div>

			</div>

			<time title= '10 de fevereiro às 14hrs' dateTime='2024-02-10 14:00:00'>Publicado há 1h</time>
		</header>

		<div className={styles.content}>
			<p>Fala galeraa 👋</p>	
			<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
			<p> {' '} <a href='#'>jane.design/doctorcare </a></p>

			<p> 
				<a href='#'>#novoprojeto</a>{' '}
				<a href='#'>#nlw</a>{' '}
				<a href='#'>#rocketseat</a>{' '}
				
			</p>

		</div>

		<form className={styles.commentForm}>
			<strong>Leave your feedback!</strong>
			
			<textarea placeholder='Deixe um comentário'/>
			
			<footer>
				<button type='submit'>Comentar</button>
			</footer>
		</form>

	</article>
	)
}
