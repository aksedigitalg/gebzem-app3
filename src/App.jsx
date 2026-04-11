import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import PharmacyButton from './components/PharmacyButton/PharmacyButton'
import BottomNav from './components/BottomNav/BottomNav'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <SearchBar />
        <PharmacyButton />
      </main>
      <BottomNav />
    </div>
  )
}

export default App
