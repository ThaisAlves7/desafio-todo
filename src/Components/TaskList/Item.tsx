import { Check, Trash } from '@phosphor-icons/react'

import styles from './Item.module.css'

import { ITasks, TaskStatus } from '../../App'

interface TasksProps {
  data: ITasks
  onRemoveTask: (id: string) => void
  onToggleTaskStatus: ({ id, value }: TaskStatus) => void
}

export function Item({ data, onRemoveTask, onToggleTaskStatus }: TasksProps) {
  const checkBoxCheckedClassName = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
  const paragraphCheckedClassName = data.isChecked
    ? styles['paragraph-checked']
    : ''

  const handleDeleteTask = () => {
    onRemoveTask(data.id)
  }

  const handleCheckedStatusTask = () => {
    onToggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleCheckedStatusTask}>
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
