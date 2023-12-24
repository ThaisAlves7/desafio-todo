import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'

import './global.css'
import styles from './App.module.css'

import { Item } from './Components/TaskList/Item'
import { Empty } from './Components/TaskList/Empty'
import { Input } from './Components/Input'
import { Header } from './Components/Header'
import { Button } from './Components/Button'
import { ListHeader } from './Components/TaskList/ListHeader'

export interface ITasks {
  id: string
  task: string
  isChecked: boolean
}

export interface TaskStatus {
  id: string
  value: boolean
}

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      task: 'Terminar o desafio',
      isChecked: true,
    },
    {
      id: uuidv4(),
      task: 'Estudar TypeScript',
      isChecked: false,
    },
    {
      id: uuidv4(),
      task: 'Estudar TypeScript',
      isChecked: false,
    },
  ])
  const [inputText, setInputText] = useState('')

  const handleCreateNewTask = () => {
    if (!inputText) return

    const newTask: ITasks = {
      id: uuidv4(),
      task: inputText,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputText('')
  }

  const handleDeleteTask = (taskToDelete: string) => {
    const taskDelete = tasks.filter((task) => {
      return task.id !== taskToDelete
    })

    setTasks(taskDelete)
  }

  const handleCheckedStatusTask = ({ id, value }: TaskStatus) => {
    const updateCheckedStatus = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updateCheckedStatus)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />

          <Button onClick={handleCreateNewTask}>
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
                    onToggleTaskStatus={handleCheckedStatusTask}
                  />
                )
              })}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}
