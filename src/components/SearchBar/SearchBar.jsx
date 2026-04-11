import { Search } from 'lucide-react'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <Search size={18} strokeWidth={1.5} className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Şehirde bir yer ara..."
        />
      </div>
    </div>
  )
}

export default SearchBar
