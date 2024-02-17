import styles from './styles.module.scss'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'
 
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    
        <div className={styles.profile}>
            <Avatar hasBorder={true} src="https://github.com/GugaAAndrade.png" />
            <strong> Gustavo Andrade</strong>
            <span>Developer</span>
            
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
            </a>
            
        </footer>
    </aside>
  )
}