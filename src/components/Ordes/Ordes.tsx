import styles from "../../styles/Orders.module.css";


const orders = [
  { icon: "💰", title: "$2400, Design changes", time: "22 DEC 7:20 PM", color: "#4caf50" },
  { icon: "🔔", title: "New order #4219423", time: "21 DEC 11:21 PM", color: "#f44336" },
  { icon: "💳", title: "Server Payments for April", time: "21 DEC 9:28 PM", color: "#2196f3" },
  { icon: "💳", title: "New card added for order #3210145", time: "20 DEC 2:20 AM", color: "#ff9800" },
  { icon: "📦", title: "Unlock packages for Development", time: "18 DEC 4:54 AM", color: "#9c27b0" },
  { icon: "🔔", title: "New order #9851258", time: "17 DEC 11:21 PM", color: "#9c27b0" },
]

export default function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Orders overview</h3>
        <span className={styles.growth}>+30%</span>
      </div>

      <div className={styles.ordersList}>
        {orders.map((order, index) => (
          <div key={index} className={styles.orderItem}>
            <div className={styles.orderIcon} style={{ backgroundColor: order.color }}>
              <span>{order.icon}</span>
            </div>
            <div className={styles.orderContent}>
              <div className={styles.orderTitle}>{order.title}</div>
              <div className={styles.orderTime}>{order.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
