import './global.css'
import styles from './App.module.css'

import { PlusCircle } from '@phosphor-icons/react'

import { Header } from './Components/Header'
import { Input } from './Components/Input'
import { Button } from './Components/Button'
import { ListHeader } from './Components/TaskList/ListHeader'
import { Empty } from './Components/TaskList/Empty'
import { Item } from './Components/TaskList/Item'

const tasks = [
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
]

export interface ITasks {
  id: number
  task: string
  isChecked: boolean
}

export function App() {
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
                return <Item key={task.id} data={task} />
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
