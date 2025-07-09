import styles from "../../styles/Cards.module.css";

//import { BarChart3, Users, TrendingUp } from "lucide-react"

export default function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundPattern}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circle4}></div>
        <div className={styles.circle5}></div>
        <div className={styles.circle6}></div>
      </div>

      {/* <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <BarChart3 size={18} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardLabel}>Total revenue</div>
            <div className={styles.cardValue}>$53,009.89</div>
            <div className={styles.cardTrend}>
              <TrendingUp size={14} />
              <span>12% increase from last month</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Users size={18} />
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardLabel}>Resources</div>
            <div className={styles.cardValue}>
              101 <span className={styles.cardValueSub}>/120</span>
            </div>
            <div className={styles.cardTrend}>
              <TrendingUp size={14} />
              <span>2% increase from last month</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
