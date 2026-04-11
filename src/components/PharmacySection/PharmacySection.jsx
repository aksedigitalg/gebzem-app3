import { Moon, MapPin, Clock, ChevronRight } from 'lucide-react'
import { pharmacies } from '../../data/mockData'
import styles from './PharmacySection.module.css'

function PharmacySection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Nöbetçi Eczaneler</h2>
        <button className={styles.viewAll}>
          <span>Tümü</span>
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>
      <div className={styles.list}>
        {pharmacies.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.iconCircle}>
              <Moon size={22} strokeWidth={1.5} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{item.name}</h3>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <MapPin size={13} strokeWidth={1.5} />
                  <span>{item.address}</span>
                </div>
                <div className={styles.detail}>
                  <Clock size={13} strokeWidth={1.5} />
                  <span>{item.hours}</span>
                </div>
              </div>
            </div>
            <ChevronRight size={18} strokeWidth={1.5} className={styles.arrow} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default PharmacySection
