import { ChevronRight, Clock } from 'lucide-react'
import { news } from '../../data/mockData'
import styles from './NewsSection.module.css'

function NewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Güncel Haberler</h2>
        <button className={styles.viewAll}>
          <span>Tümü</span>
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>
      <div className={styles.scrollContainer}>
        {news.map((item) => (
          <article key={item.id} className={styles.card}>
            <div
              className={styles.image}
              style={{ background: item.gradient }}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.meta}>
                <Clock size={12} strokeWidth={1.5} />
                <span>{item.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsSection
