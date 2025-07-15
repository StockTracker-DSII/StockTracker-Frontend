import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from "../../styles/Login/MenuLogin.module.css"; 

interface HeaderProps {
  logoText?: string;
  navItems?: Array<{
    label: string;
    href: string;
    onClick?: () => void;
  }>;
  downloadButtonText?: string;
  onDownloadClick?: () => void;
}

export const MenuLogin: React.FC<HeaderProps> = ({
  logoText = 'STOCK TRACKER',
  navItems = [
    { label: 'DASHBOARD', href: '/dashboard' },
    { label: 'SIGN UP', href: '/signup' },
    { label: 'SIGN IN', href: '/signin' },
  ],
  downloadButtonText = 'Free Download',
  onDownloadClick,
}) => {


  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <span className={styles.logoText}>{logoText}</span>
        </div>
        <nav className={styles.nav}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={styles.navLink}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
            >
              {item.label}
            </Link>
          ))}
          <button className={styles.downloadBtn} onClick={onDownloadClick}>
            {downloadButtonText}
          </button>
        </nav>
      </div>
    </header>
  );
};