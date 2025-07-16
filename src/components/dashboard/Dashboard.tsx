import styles from "../../styles/Dashboard.module.css";
import Cards from "../cardspreview/Cards";
import ProductsTable from "../ProductsTable/ProductsTable";
import GenerateReport from "../report/GenerateReport";


/**
 * Componente Dashboard - El diseño principal de la aplicación
 *
 * Este componente organiza la estructura completa de la interfaz incluyendo:
 * - Barra lateral de navegación
 * - Área principal de contenido con cabecera
 * - Tabla de productos
 * - Resumen de pedidos
 * - Tarjetas de métricas
 *
 * El diseño utiliza CSS Grid y Flexbox para ser responsivo:
 * - Sidebar: Panel de navegación con ancho fijo
 * - Main Content: Área flexible que contiene todo el contenido dinámico
 *   - Header: Barra de navegación superior
 *   - Content Grid: Diseño de dos columnas para mostrar datos
 *     - Izquierda: Contenido principal (ProductsTable)
 *     - Derecha: Métricas secundarias (Orders y Cards)
 */



export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* Área de Contenido Principal - Contiene todo el contenido dinámico */}
      <div className={styles.mainContent}>
        {/* Contenedor de Contenido - Envuelve las secciones principales */}
        <div className={styles.content}>
          {/* Grid de Contenido - Diseño responsivo de dos columnas */}
          <div className={styles.contentGrid}>
            {/* Sección Izquierda - Área de contenido principal (ocupa 75-80% del ancho) */}
            <div className={styles.leftSection}>
              {/* Componente ProductsTable - Muestra el inventario de productos en formato tabla */}
              <ProductsTable />
            </div>
            
            {/* Panel Derecho - Área de contenido secundario (ocupa 20-25% del ancho) */}
            <div className={styles.rightPanel}>
              {/* Sección de Resumen de Pedidos - Muestra transacciones recientes */}
              <div className={styles.OrdersOverview}>
                <GenerateReport />
              </div>
              
              {/* Sección de Tarjetas de Métricas - Indicadores clave de rendimiento */}
              <div className={styles.MetricsCards}>
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}