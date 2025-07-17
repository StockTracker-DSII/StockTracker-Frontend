"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Login/SingIn.module.css";
import { MenuLogin } from "./MenuLogin";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 1 + i * 0.1,
  }));

  return (
    <div className={styles.floatingPaths}>
      <svg className={styles.backgroundSvg} viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.4, 0.8, 0.4],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className={styles.container}>
      {/* Header Navigation */}
      <MenuLogin />
      
      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.loginSection}>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.subtitle}>
              Enter your email and password to sign in
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.rememberMe}>
                <label className={styles.toggleLabel}>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className={styles.toggleInput}
                  />
                  <span className={styles.toggleSlider}></span>
                  <span className={styles.toggleText}>Remember me</span>
                </label>
              </div>

              <button type="submit" className={styles.signInBtn}>
                SIGN IN
              </button>

              <p className={styles.signUpLink}>
                Don't have an account?{" "}
                <a href="#" className={styles.link}>
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className={styles.brandSection}>
          {/* Fondo animado */}
          <div className={styles.backgroundContainer}>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>
          
          <div className={styles.brandContent}>
            <div className={styles.brandLogo}>
              <div className={styles.logoIcon}>
                <img
                  src="/assets/Logos/op1/Globe.png"
                  alt="Logo"
                  className={styles.logoImage}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © 2021, Made with ❤️{" "}
            <a href="#" className={styles.footerLink}>
              by Creative
            </a>{" "}
            <a href="#" className={styles.footerLink}>
              StockTracker
            </a>{" "}
            for a better web.
          </p>
        </div>
      </footer>
    </div>
  );
}