import styles from './styles.module.scss'

export function Avatar({ hasBorder, src}){

    return (
        <img  className={hasBorder ? styles.avatarWithBorder : styles.avatar}
         src={src}
        />
    )
}