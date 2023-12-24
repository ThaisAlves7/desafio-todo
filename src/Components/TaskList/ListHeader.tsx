import styles from './ListHeader.module.css'

interface HeaderProps {
  taskCounter: number
  checkedTasksCounter: number
}

export function ListHeader({ taskCounter, checkedTasksCounter }: HeaderProps) {
  return (
    <header className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{taskCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {taskCounter === 0
            ? taskCounter
            : `${checkedTasksCounter} de ${taskCounter}`}
        </span>
      </aside>
    </header>
  )
}
