"use client";

import styles from "../../styles/Layout.module.css";
import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";
import Dashboard from "./Dashboard";
import Purchase from "../Metricspreview/PurchaseMod"
import Modal from "../Metricspreview/Modal";

export function Layout() {
  const [activeView, setActiveView] = useState("dashboard");
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = (menuKey: string) => {
    console.log("Menu clicked:", menuKey); // Para depuración
    if (menuKey === "add-item") {
      setIsModalOpen(true);
      console.log("Modal should open now"); // Para depuración
    } else if (menuKey === "billing") {
    setIsPurchaseOpen(true);
    } else {
      setActiveView(menuKey);
    }
  };

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "edit-product":
      case "inventory":
      case "billing":
      case "users":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={styles.dashboard}>
      <Sidebar onMenuClick={handleMenuClick} activeView={activeView} />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.contentArea}>{renderContent()}</div>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => {
        console.log("Closing modal"); // Para depuración
        setIsModalOpen(false);
      }} />

      <Purchase isOpen={isPurchaseOpen} onClose={() => {
        console.log("Closing purchase modal");
        setIsPurchaseOpen(false);
      }} />
    </div>
  );
}