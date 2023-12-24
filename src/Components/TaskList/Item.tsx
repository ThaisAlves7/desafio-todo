import { Check, Trash } from '@phosphor-icons/react'

import styles from './Item.module.css'

export function Item() {
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" checked={true} />
          <span className={`${styles.checkbox} ${styles.checked}`}>
            <Check size={12} />
          </span>

          <p className={`${styles.paragraph} ${styles['paragraph-checked']}`}>
            Comprar fardo Coca-Cola
          </p>
        </label>
      </div>

      <button>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
