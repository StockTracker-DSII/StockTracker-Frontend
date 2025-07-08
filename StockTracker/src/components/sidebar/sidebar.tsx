import { useState } from "react";
import {
  CirclePlus,
  Combine,
  Edit,
  List,
  CreditCard,
  Clock,
  FileText,
  Users,
  Database,
  Settings,
  HelpCircle,
} from "lucide-react";
import styles from "../../styles/sidebar.module.css";

/**
 * Componente Sidebar - Barra lateral de navegación principal
 *
 * Características principales:
 * - Menú de navegación con iconos
 * - Botones de acción principales (Add Item, Edit Product)
 * - Estado activo para elementos seleccionados
 * -
 * -
 */

export default function Sidebar() {
  // Estado para controlar qué ítem está activo
  const [activeItem, setActiveItem] = useState(-1); // -1 significa ninguno seleccionado inicialmente

  /**
   * Maneja el clic en un ítem del menú
   * @param {number} index - Índice del ítem seleccionado
   */
  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <div className={styles.sidebar}>
      {/* Sección del logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <img
            src="/assets/Logos/op1/1.png"
            alt="Logo"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.logoText}>
          <span className={styles.logoTitle}>STOCKTRACKER</span>
          <span className={styles.logoSubtitle}>DIGITAL</span>
        </div>
      </div>
      {/* Patrón decorativo de fondo con círculos */}
      <div className={styles.backgroundPattern}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circle4}></div>
        <div className={styles.circle5}></div>
      </div>
      {/* Contenedor principal del menú */}
      <div className={styles.menuItems}>
        {/* Botón para agregar ítem */}
        <button
          className={`${styles.addButton} ${
            activeItem === 0 ? styles.active : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          <CirclePlus className={styles.iconBtn} size={18} />
          <span className={styles.textBtn}>Add Item</span>
        </button>
        {/* Botón para editar producto */}
        <button
          className={`${styles.addButton} ${
            activeItem === 1 ? styles.active : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          <Combine className={styles.iconBtn} size={18} />
          <span className={styles.textBtn}>Edit Product</span>
        </button>
        {/* Lista de opciones de navegación */}
        <div className={styles.navItems}>
          {[
            { icon: Edit, label: "Inventory" },
            { icon: List, label: "List Products" },
            { icon: CreditCard, label: "Billing" },
            { icon: Clock, label: "Record" },
            { icon: FileText, label: "report" },
            { icon: Users, label: "Users" },
            { icon: Database, label: "Tables" },
            { icon: Settings, label: "Menu settings" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${styles.navItem} ${
                activeItem === index + 2 ? styles.active : ""
              }`}
              onClick={() => handleItemClick(index + 2)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Botón de ayuda en la parte inferior */}
      <div className={styles.helpIcon}>
        <div className={styles.iconCircle}>
          <HelpCircle size={18} />
        </div>
      </div>
    </div>
  );
}
