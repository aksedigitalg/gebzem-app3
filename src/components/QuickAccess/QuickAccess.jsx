import { Newspaper, CalendarDays, Bus, CloudSun, ShieldAlert, MapPin } from 'lucide-react'
import { categories } from '../../data/mockData'
import styles from './QuickAccess.module.css'

const iconMap = {
  Newspaper,
  CalendarDays,
  Bus,
  CloudSun,
  ShieldAlert,
  MapPin,
}

function QuickAccess() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {categories.map((cat) => {
          const Icon = iconMap[cat.iconName]
          return (
            <button key={cat.id} className={styles.card}>
              <Icon size={32} strokeWidth={1.5} className={styles.icon} />
              <span className={styles.title}>{cat.title}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default QuickAccess
