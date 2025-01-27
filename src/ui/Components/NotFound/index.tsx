import clipBoard from '../../../assets/clipboard-logo.svg'
import styles from './styles.module.css'
export const NotFoundTask = () => {
    return (
        <div className={styles.contentNotFound}>
        <img src={clipBoard} alt="Ícone de cópia" />
        <p>
          Você ainda não tem tarefas cadastradas
        </p>
        <span>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    )
}