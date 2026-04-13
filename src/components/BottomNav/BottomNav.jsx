import { useState } from 'react'
import { Home, Compass, Map, Megaphone, CircleUserRound } from 'lucide-react'
import styles from './BottomNav.module.css'

const tabs = [
  { id: 'home', label: 'Ana Sayfa', icon: Home },
  { id: 'explore', label: 'Keşfet', icon: Compass },
  { id: 'map', label: 'Harita', icon: Map },
  { id: 'alerts', label: 'Duyurular', icon: Megaphone },
  { id: 'profile', label: 'Profil', icon: CircleUserRound },
]

function BottomNav() {
  const [active, setActive] = useState('home')

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            onClick={() => setActive(tab.id)}
            aria-label={tab.label}
          >
            <Icon size={22} strokeWidth={1.5} />
            <span className={styles.label}>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
