import './global.css'
import  styles from './App.module.css'
import todoLogo from './assets/todo-logo.svg'
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
              <button type="submit">Criar <PlusCircle size={16} /></button>
            </form>
        </div>

        <div>
          <div>
            <span>Tarefas Criadas <strong>0</strong></span>
            <span>Tarefas Criadas <strong>0</strong></span>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

