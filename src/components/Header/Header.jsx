import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left} />
      <div className={styles.avatar} />
    </header>
  )
}

export default Header
