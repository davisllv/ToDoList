import './global.css'
import  styles from './App.module.css'

import clipBoard from './assets/clipboard-logo.svg'
import { PlusCircle } from "@phosphor-icons/react"
import { Header } from './Header'

export const App = () => {

  return (
    <div>
    <Header />

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

