import styles from './PharmacyButton.module.css'

function PharmacyButton() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>
        <div className={styles.iconCircle} />
        <span className={styles.label}>Eczane</span>
      </button>
    </div>
  )
}

export default PharmacyButton
