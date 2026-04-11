import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import QuickAccess from './components/QuickAccess/QuickAccess'
import NewsSection from './components/NewsSection/NewsSection'
import EventsSection from './components/EventsSection/EventsSection'
import PharmacySection from './components/PharmacySection/PharmacySection'
import BottomNav from './components/BottomNav/BottomNav'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <SearchBar />
        <QuickAccess />
        <NewsSection />
        <EventsSection />
        <PharmacySection />
      </main>
      <BottomNav />
    </div>
  )
}

export default App
