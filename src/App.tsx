import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import { v4 as uuidv4 } from 'uuid'

import './global.css'
import styles from './App.module.css'
import 'react-toastify/dist/ReactToastify.css'

import { Item } from './Components/TaskList/Item'
import { Empty } from './Components/TaskList/Empty'
import { Input } from './Components/Input'
import { Header } from './Components/Header'
import { Button } from './Components/Button'
import { ListHeader } from './Components/TaskList/ListHeader'
import { ToastContainer, toast } from 'react-toastify'

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
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [inputText, setInputText] = useState('')

  const notifyError = () => toast.error('Esse Campo é obrigatório')
  const notifyDelete = (msg: string) => toast.info(msg)

  const handleCreateNewTask = () => {
    const newTask: ITasks = {
      id: uuidv4(),
      task: inputText,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputText('')
  }

  const handleDeleteTask = (taskToDelete: string) => {
    const isDelete = confirm('Você deseja deletar a task?')

    if (isDelete) {
      const taskDelete = tasks.filter((task) => {
        return task.id !== taskToDelete
      })

      setTasks(taskDelete)
      notifyDelete('Task deletada')
    }
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

  const checkedTaskCounter = tasks.reduce((totalChecked, task) => {
    if (task.isChecked) {
      return totalChecked + 1
    }

    return totalChecked
  }, 0)

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            required
          />

          <Button onClick={inputText ? handleCreateNewTask : notifyError}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
          <ToastContainer />
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            taskCounter={tasks.length}
            checkedTasksCounter={checkedTaskCounter}
          />

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
