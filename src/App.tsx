import './global.css'
import styles from './App.module.css'
import { Header } from './ui/Components/Header'
import { Form } from './ui/Components/Form'
import { NotFoundTask } from './ui/Components/NotFound'
import { useEffect, useState } from 'react'
import { ITask } from './data/@types/interfaces/ITasks'
import { uuidv4 } from './data/services/uuid'
import { Tasks } from './ui/Components/Tasks'
import { TaskCounter } from './ui/Components/TaskCounter'

export const App = () => {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  const handleCreateNewTask = (description: string) => {
    const newTask: ITask = {
      id: uuidv4(),
      description,
      completed: false,
    }

    setTasks(state => [...state, newTask])
  }

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const handleToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  useEffect(() => {
    const completedTasks = tasks.reduce((acc, task) => task.completed? acc + 1 : acc, 0)
    setCompletedTasksCount(completedTasks)
  }, [tasks])

  return (
    <div>
      <Header />

      <div className={styles.main}>

        <Form handleSubmitValues={handleCreateNewTask} />

        <div className={styles.contentBoxes}>
          <div className={styles.contentTexts} >
            <TaskCounter label='Tarefas criadas' count={tasks.length} color='var(--blue)' />
            <TaskCounter label='Concluídas' count={completedTasksCount} color='var(--purple)' />
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

