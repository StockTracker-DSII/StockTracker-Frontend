"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Facebook, Linkedin, Chrome } from "lucide-react";
import styles from "../../styles/Login/SingUp.module.css";

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
    width: 0.5 + i * 0.08,
  }));

  return (
    <div className={styles.floatingPaths}>
      <svg className={styles.backgroundSvg} viewBox="0 0 696 316" fill="none">
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className={styles.container}>
      {/* Sección azul con márgenes y bordes redondeados */}
      <div className={styles.bannerSection}>
        <div className={styles.backgroundContainer}>
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
          <FloatingPaths position={6} />
          <FloatingPaths position={-2} />
        </div>

        <header className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <img
                  src="/assets/Logos/op1/1.png"
                  alt="Logo"
                  className={styles.logoImage}
                />
              </div>
              <span className={styles.logoText}>STOCK TRACKER</span>
            </div>

            <nav className={styles.navLinks}>
              <a href="#" className={styles.navLink}>
                DASHBOARD
              </a>
              <a href="#" className={styles.navLink}>
                PROFILE
              </a>
              <a href="#" className={styles.navLink}>
                SIGN UP
              </a>
              <a href="#" className={styles.navLink}>
                SIGN IN
              </a>
            </nav>

            <button className={styles.downloadBtn}>Free Download</button>
          </div>
        </header>

        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Welcome!</h1>
        </div>
      </div>

      {/* Formulario superpuesto */}
      <div className={styles.formContainer}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Register with</h2>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialBtn}>
              <Facebook size={20} />
            </button>
            <button type="button" className={styles.socialBtn}>
              <Linkedin size={20} />
            </button>
            <button type="button" className={styles.socialBtn}>
              <Chrome size={20} />
            </button>
          </div>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Your password"
                className={styles.input}
                required
                minLength={6}
              />
            </div>

            <button type="submit" className={styles.signUpBtn}>
              SIGN UP
            </button>

            <p className={styles.signInLink}>
              Already have an account? <a href="#">Sign in</a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer al final de la página */}
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

      {/* Control para ajustar altura del banner (opcional) */}
    </div>
  );
};

export default SignUp;
