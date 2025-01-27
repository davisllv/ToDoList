import './global.css'
import { Header } from './ui/Components/Header'
import { Form } from './ui/Components/Form'
import styles from './App.module.css'
import { NotFoundTask } from './ui/Components/NotFound'
import { useState } from 'react'
import { ITask } from './data/@types/interfaces/ITasks'
import { uuidv4 } from './data/services/uuid'
import { Tasks } from './ui/Components/Tasks'

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[])

  const handleCreateNewTask = (description: string) => {
    const newTask: ITask = {
      id: uuidv4(),
      description,
      completed: false,
    }

    setTasks(state => [...state, newTask])
  }

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <Form handleSubmitValues={handleCreateNewTask} />

        <div className={styles.contentBoxes}>
          <div className={styles.contentTexts}>
            <span>Tarefas Criadas <strong>0</strong></span>
            <span>Concluídas <strong>0</strong></span>
          </div>
          <div className={styles.contentTasks}>
          {tasks.length > 0 ?
            tasks.map(task => {
              return (
                <Tasks 
                  key={task.id} 
                  task={task}/>
              )
            })
             :
            <NotFoundTask />
          }
          </div>
       
        </div>
      </div>

    </div>
  )
}

