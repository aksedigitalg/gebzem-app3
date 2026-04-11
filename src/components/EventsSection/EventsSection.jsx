import { MapPin, Clock } from 'lucide-react'
import { events } from '../../data/mockData'
import styles from './EventsSection.module.css'

function EventsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Yaklaşan Etkinlikler</h2>
      <div className={styles.list}>
        {events.map((event, index) => (
          <article
            key={event.id}
            className={`${styles.item} ${index < events.length - 1 ? styles.bordered : ''}`}
          >
            <div className={styles.dateBadge}>
              <span className={styles.day}>{event.day}</span>
              <span className={styles.month}>{event.month}</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{event.title}</h3>
              <div className={styles.details}>
                <div className={styles.detail}>
                  <MapPin size={14} strokeWidth={1.5} />
                  <span>{event.location}</span>
                </div>
                <div className={styles.detail}>
                  <Clock size={14} strokeWidth={1.5} />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default EventsSection
