import { ArrowUpRight, Fuel, Landmark } from 'lucide-react'
import styles from './FeatureCard.module.css'

function FeatureCard() {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
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

      <div className={styles.chipsRow}>
        <button className={styles.chip}>
          <span className={`${styles.chipIcon} ${styles.blue}`}>P</span>
          <span className={styles.chipLabel}>Park Yeri</span>
        </button>

        <button className={styles.chip}>
          <span className={`${styles.chipIcon} ${styles.red}`}>
            <Fuel size={18} strokeWidth={2} />
          </span>
          <span className={styles.chipLabel}>Benzinlik</span>
        </button>
      </div>

      <button className={styles.chip}>
        <span className={`${styles.chipIcon} ${styles.amber}`}>
          <Landmark size={18} strokeWidth={2} />
        </span>
        <span className={styles.chipLabel}>Tarihi Yerler</span>
      </button>
    </div>
  )
}

export default FeatureCard
