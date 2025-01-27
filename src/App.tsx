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
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[]);
  const [tasksCount, setTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  const handleCreateNewTask = (description: string) => {
    const newTask: ITask = {
      id: uuidv4(),
      description,
      completed: false,
    }

    setTasks(state => [...state, newTask])
    setTasksCount(tasks.length + 1)
  }

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id!== taskId)
    setTasksCount(updatedTasks.length)
    setTasks(updatedTasks)
  }

  const handleToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, completed:!task.completed }
      }
      return task
    })
    const count = updatedTasks.reduce((acc, task) => task.completed ? acc + 1 : acc, 0)
    setCompletedTasksCount(count);
    setTasks(updatedTasks)
  }

  return (
    <div>
      <Header />

      <div className={styles.main}>
        <Form handleSubmitValues={handleCreateNewTask} />

        <div className={styles.contentBoxes}>
          <div className={styles.contentTexts}>
            <span>Tarefas Criadas <strong>{tasksCount}</strong></span>
            <span>Concluídas <strong>{completedTasksCount}</strong></span>
          </div>
          <div className={styles.contentTasks}>
          {tasks.length > 0 ?
            tasks.map(task => {
              return (
                <Tasks 
                  key={task.id} 
                  task={task}
                  handleDeleteTask={handleDeleteTask}
                  handleToggleTask={handleToggleTask}
                  />
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

