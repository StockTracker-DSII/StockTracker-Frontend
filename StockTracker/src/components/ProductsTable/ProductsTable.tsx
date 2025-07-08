import styles from "../../styles/ProductsTable.module.css";

/**
 * Datos de ejemplo para los productos
 * Cada producto contiene:
 * - name: Nombre del producto
 * - units: Cantidad de unidades
 * - cost: Costo del producto (puede ser "Not set")
 * - stock: Porcentaje de stock disponible
 * - color: Color representativo del producto (ignorar)
 * HACER LOS CAMBIOS RESPECTIVOS QUE DESEEN PERO COMENTEN LOS CAMBIOS
 */

const products = [
  {
    name: "Chakra Soft UI Version",
    units: 100,
    cost: "$14,000",
    stock: 60,
    color: "#4E9FD1",
  },
  {
    name: "Add Progress Track",
    units: 233,
    cost: "$3,000",
    stock: 10,
    color: "#4E9FD1",
  },
  {
    name: "Fix Platform Errors",
    units: 563,
    cost: "Not set",
    stock: 100,
    color: "#4E9FD1",
  },
  {
    name: "Launch our Mobile App",
    units: 373,
    cost: "$32,000",
    stock: 100,
    color: "#4E9FD1",
  },
  {
    name: "Add the New Pricing Page",
    units: 300,
    cost: "$400",
    stock: 25,
    color: "#4E9FD1",
  },
];

/**
 * Componente ProductsTable - Muestra una tabla de productos con su información
 *
 * Características principales:
 * - Muestra un listado de productos en formato tabla
 * - Incluye barra de progreso visual para el stock
 * HACER LOS CAMBIOS RESPECTIVOS QUE DESEEN PERO COMENTEN LOS CAMBIOS
 */

export default function ProductsTable() {
  return (
    <div className={styles.productsContainer}>
      {/* Encabezado de la tabla con título y subtítulo */}
      <div className={styles.header}>
        <h2 className={styles.title}>Products</h2>
        <span className={styles.subtitle}>30 Added this month</span>
      </div>
      {/* Contenedor principal de la tabla */}
      <div className={styles.tableContainer}>
        {/* Encabezados de las columnas */}
        <div className={styles.tableHeader}>
          <div className={styles.columnHeader}>NAME</div>
          <div className={styles.columnHeader}>UNITS</div>
          <div className={styles.columnHeader}>COST</div>
          <div className={styles.columnHeader}>STOCK</div>
        </div>
        {/* Cuerpo de la tabla - Listado de productos */}
        <div className={styles.tableBody}>
          {products.map((product, index) => (
            <div key={index} className={styles.tableRow}>
              {/* Celda del nombre del producto con icono */}
              <div className={styles.nameCell}>
                <div
                  className={styles.productIcon}
                  style={{ backgroundColor: product.color }}
                ></div>
                <span className={styles.productName}>{product.name}</span>
              </div>
              {/* Celda de unidades */}
              <div className={styles.unitsCell}>{product.units}</div>

              {/* Celda de costo */}
              <div className={styles.costCell}>{product.cost}</div>
              {/* Celda de stock con barra de progreso */}
              <div className={styles.stockCell}>
                <div className={styles.progressContainer}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: `${product.stock}%`,
                      backgroundColor: product.color,
                    }}
                  ></div>
                </div>
                <span className={styles.stockPercentage}>{product.stock}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
