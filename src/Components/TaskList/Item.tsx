import { Check, Trash } from '@phosphor-icons/react'

import styles from './Item.module.css'
import { ITasks } from '../../App'

interface TaskStatus {
  id: string
  value: boolean
}

interface TasksProps {
  data: ITasks
  onRemoveTask: (id: string) => void
  toggleTaskStatus?: ({ id, value }: TaskStatus) => void
}

export function Item({ data, onRemoveTask, toggleTaskStatus }: TasksProps) {
  const checkBoxCheckedClassName = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassName = data.isChecked
    ? styles['paragraph-checked']
    : ''

  const handleDeleteTask = () => {
    onRemoveTask(data.id)
  }

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkBoxCheckedClassName}`}>
            <Check size={12} />
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
            {data.task}
          </p>
        </label>
      </div>

      <button onClick={handleDeleteTask}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
