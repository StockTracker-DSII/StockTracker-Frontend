"use client";

import styles from "../../styles/Layout.module.css";
import { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/sidebar";
import Dashboard from "./Dashboard";
import Modal from "../Metricspreview/Modal";
import GenerateReport from "../report/GenerateReport";

export function Layout() {
  const [activeView, setActiveView] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = (menuKey: string) => {
    console.log("Menu clicked:", menuKey); // Para depuración
    if (menuKey === "add-item") {
      setIsModalOpen(true);
      console.log("Modal should open now"); // Para depuración
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
      case "users":
        return <Dashboard />;
        /*
      case "generate-report":
        return <GenerateReport />;// no hay suficiente información para implementar este caso
         */
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
    </div>
  );
}