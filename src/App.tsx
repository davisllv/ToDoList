import './global.css'
import { Header } from './ui/Components/Header'
import { Form } from './ui/Components/Form'
import styles from './App.module.css'
import { NotFoundTask } from './ui/Components/NotFound'
import { useState } from 'react'
import { ITasks } from './data/@types/interfaces/ITasks'

export const App = () => {
  const [tasks, setTasks] = useState<ITasks[]>([] as ITasks[])

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <Form handleSubmitValues={(ev) => {
          console.log("Evento", ev)
        }} />

        <div className={styles.contentBoxes}>
          <div className={styles.contentTexts}>
            <span>Tarefas Criadas <strong>0</strong></span>
            <span>Concluídas <strong>0</strong></span>
          </div>
          {tasks.length > 0 ?
            <h1></h1> :
            <NotFoundTask />

          }
        </div>
      </div>

    </div>
  )
}

