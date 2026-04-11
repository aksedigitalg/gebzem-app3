import { Moon } from 'lucide-react'
import styles from './PharmacyButton.module.css'

function PharmacyButton() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <div className={styles.iconCircle}>
          <Moon size={20} strokeWidth={1.5} />
        </div>
        <span className={styles.label}>Eczane</span>
      </button>
    </div>
  )
}

export default PharmacyButton
