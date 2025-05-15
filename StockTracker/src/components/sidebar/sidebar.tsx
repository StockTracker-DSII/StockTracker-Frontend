import {
  Edit,
  List,
  CreditCard,
  Clock,
  FileText,
  Users,
  Database,
  Settings,
  Combine,
  CirclePlus,
} from "lucide-react";

import styles from "../../styles/sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logoSvg}
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={styles.logoText}>
          <span className={styles.logoTitle}>STOCKTRACKER</span>
          <span className={styles.logoSubtitle}>DIGITAL</span>
        </div>
      </div>

      <div className={styles.menuItems}>
        <button className={styles.addButton}>
          <CirclePlus className={styles.iconBtn} size={18} />
          <span className={styles.textBtn}>Add Item</span>
        </button>

        <button className={styles.addButton}>
          <Combine className={styles.iconBtn} size={18} />
          <span className={styles.textBtn}>Edit Product</span>
        </button>

        <div className={styles.navItems}>
          <div className={styles.navItem}>
            <Edit size={18} />
            <span>Adjust Inventory</span>
          </div>
          <div className={styles.navItem}>
            <List size={18} />
            <span>List Products</span>
          </div>
          <div className={styles.navItem}>
            <CreditCard size={18} />
            <span>Billing</span>
          </div>
          <div className={styles.navItem}>
            <Clock size={18} />
            <span>Record</span>
          </div>
          <div className={styles.navItem}>
            <FileText size={18} />
            <span>Generate report</span>
          </div>
          <div className={styles.navItem}>
            <Users size={18} />
            <span>Users</span>
          </div>
          <div className={styles.navItem}>
            <Database size={18} />
            <span>Tables</span>
          </div>
          <div className={styles.navItem}>
            <Settings size={18} />
            <span>Menu settings</span>
          </div>
        </div>
      </div>

      <div className={styles.helpIcon}>
        <div className={styles.iconCircle}>
          <span>?</span>
        </div>
      </div>
    </div>
  );
}
