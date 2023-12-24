import styles from './ListHeader.module.css'

export function ListHeader() {
  return (
    <header className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>5</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>3 de 5</span>
      </aside>
    </header>
  )
}