import './global.css'
import  styles from './App.module.css'
import todoLogo from './assets/todo-logo.svg'
import clipBoard from './assets/clipboard-logo.svg'
import { PlusCircle } from "@phosphor-icons/react"

export const App = () => {

  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="Logo To.do" />
        <h1>to<b>do</b></h1>
      </header>

      <div className={styles.main}>
        <div className={styles.formBoxes}>
            <form action="submit">
              <input type="text" placeholder="Adicione uma nova tarefa" />
              <button type="submit">Criar <PlusCircle size={20} /></button>
            </form>
        </div>

        <div className={styles.contentBoxes}>
          <div className={styles.contentTexts}>
            <span>Tarefas Criadas <strong>0</strong></span>
            <span>Concluídas <strong>0</strong></span>
          </div>
          <div className={styles.contentFields}>
            <img src={clipBoard} alt="Ícone de cópia" />
            <p>
              Você ainda não tem tarefas cadastradas
            </p>
            <span>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

