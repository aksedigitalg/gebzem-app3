import Header from './components/Header/Header'
import BottomNav from './components/BottomNav/BottomNav'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
      </main>
      <BottomNav />
    </div>
  )
}

export default App
