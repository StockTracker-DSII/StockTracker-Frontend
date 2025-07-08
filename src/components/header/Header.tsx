import styles from "../../styles/Header.module.css"
import { Search, ChevronLeft } from "lucide-react"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.titleSection}>
        <ChevronLeft className={styles.backIcon} />
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} />
        <input type="text" placeholder="Search for anything..." className={styles.searchInput} />
      </div>

      <div className={styles.userProfile}>
        <div className={styles.avatar}>
          <span>NU</span>
        </div>
        <span className={styles.userName}>User</span>
      </div>
    </div>
  )
}
