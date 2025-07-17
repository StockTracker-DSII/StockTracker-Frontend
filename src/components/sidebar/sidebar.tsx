"use client";

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

const menuItems = [
  { icon: CirclePlus, label: "Add Item", key: "add-item" },
  { icon: Combine, label: "Edit Product", key: "edit-product" },
  { icon: Edit, label: "Inventory", key: "inventory" },
  { icon: List, label: "List Products", key: "list-products" },
  { icon: CreditCard, label: "Billing", key: "billing" },
  { icon: Clock, label: "Record", key: "record" },
  /*{ icon: FileText, label: "Generate report", key: "generate-report" },*/
  { icon: Users, label: "Users", key: "users" },
  { icon: Database, label: "Tables", key: "tables" },
  { icon: Settings, label: "Menu settings", key: "menu-settings" },
];

interface SidebarProps {
  onMenuClick: (menuKey: string) => void;
  activeView: string;
}

export default function Sidebar({ onMenuClick, activeView }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(-1);

  const handleItemClick = (index: number, key: string) => {
    setActiveItem(index);
    onMenuClick(key);
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
        {/* Botones principales y menú de navegación */}
        <div className={styles.navItems}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${index < 2 ? styles.addButton : styles.navItem} ${
                activeItem === index || activeView === item.key
                  ? styles.active
                  : ""
              }`}
              onClick={() => handleItemClick(index, item.key)}
            >
              <item.icon
                className={index < 2 ? styles.iconBtn : ""}
                size={18}
              />
              <span className={index < 2 ? styles.textBtn : ""}>
                {item.label}
              </span>
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
