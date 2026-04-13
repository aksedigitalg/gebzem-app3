import { ArrowUpRight } from 'lucide-react'
import styles from './FeatureCard.module.css'

function FeatureCard() {
  return (
    <div className={styles.card}>
      <div className={styles.circles}>
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
        <span className={styles.circle} />
      </div>
      <button className={styles.arrowBtn} aria-label="Detay">
        <ArrowUpRight size={28} strokeWidth={2.5} />
      </button>
    </div>
  )
}

export default FeatureCard
