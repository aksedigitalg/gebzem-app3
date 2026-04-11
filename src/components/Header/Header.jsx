import { Bell, User } from 'lucide-react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Şehrim</h1>
      <div className={styles.actions}>
        <button className={styles.iconBtn} aria-label="Bildirimler">
          <Bell size={22} strokeWidth={1.5} />
        </button>
        <button className={styles.iconBtn} aria-label="Profil">
          <User size={22} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  )
}

export default Header
