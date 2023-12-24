import { Check, Trash } from '@phosphor-icons/react'

import styles from './Item.module.css'
import { ITasks } from '../../App'

interface TaskStatus {
  id: number
  value: boolean
}

interface TasksProps {
  data: ITasks
  removeTask?: (id: number) => void
  toggleTaskStatus?: ({ id, value }: TaskStatus) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: TasksProps) {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${styles.checked}`}>
            <Check size={12} />
          </span>

          <p className={`${styles.paragraph} ${styles['paragraph-checked']}`}>
            {data.task}
          </p>
        </label>
      </div>

      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
