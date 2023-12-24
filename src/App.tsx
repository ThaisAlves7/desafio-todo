import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import './global.css'
import styles from './App.module.css'


import { Item } from './Components/TaskList/Item'
import { Empty } from './Components/TaskList/Empty'
import { Input } from './Components/Input'
import { Header } from './Components/Header'
import { Button } from './Components/Button'
import { ListHeader } from './Components/TaskList/ListHeader'

export interface ITasks {
  id: number
  task: string
  isChecked: boolean
}

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Terminar o desafio',
      isChecked: true,
    },
    {
      id: 2,
      task: 'Estudar TypeScript',
      isChecked: false,
    },
    {
      id: 3,
      task: 'Estudar TypeScript',
      isChecked: false,
    },
  ])

  const handleDeleteTask = (taskToDelete: number) => {
    const taskDelete = tasks.filter((task) => {
      return task.id !== taskToDelete
    })

    setTasks(taskDelete)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />

          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader />

          {tasks.length !== 0 ? (
            <div>
              {tasks.map((task) => {
                return (
                  <Item
                    key={task.id}
                    data={task}
                    onRemoveTask={handleDeleteTask}
                  />
                )
              })}
            </div>
          ) : (
            <Empty></Empty>
          )}
        </div>
      </section>
    </main>
  )
}
