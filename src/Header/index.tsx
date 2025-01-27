import todoLogo from './assets/todo-logo.svg'
import styles from './styles.module.css'

export const Header = () => {
    return (
        <header className={styles.header}>
        <img src={todoLogo} alt="Logo To.do" />
        <h1>to<b>do</b></h1>
      </header>
    )
}