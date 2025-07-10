import { useEffect, useState } from "react";
import styles from "../../styles/ProductsTable.module.css";

export default function GenerateReport() {
  interface ReportItem {
    name: string;
    stock: number;
    total_sold: number;
  }

  const [reportData, setReportData] = useState<ReportItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultColor = "#4E9FD1";

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    fetch(`${API_URL}/reports/top-selling`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener el reporte");
        return res.json();
      })
      .then((data) => {
        setReportData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "24px" }}>Cargando reporte...</p>;
  if (error) return <p style={{ padding: "24px" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "24px 40px", display: "flex", justifyContent: "center" }}>
      <div className={styles.productsContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Reports: Productos más vendidos</h2>
          <span className={styles.subtitle}>{reportData.length} productos</span>
        </div>
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}>
            <div className={styles.columnHeader}>NAME</div>
            <div className={styles.columnHeader}>STOCK</div>
            <div className={styles.columnHeader}>SOLD</div>
          </div>
          <div className={styles.tableBody}>
            {reportData.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.nameCell}>
                  <div
                    className={styles.productIcon}
                    style={{ backgroundColor: defaultColor }}
                  ></div>
                  <span className={styles.productName}>{item.name}</span>
                </div>
                <div className={styles.costCell}>{item.stock}</div>
                <div className={styles.stockCell}>
                  <div className={styles.progressContainer}>
                    <div
                      className={styles.progressBar}
                      style={{
                        width: `${Math.min(item.total_sold, 100)}%`,
                        backgroundColor: defaultColor,
                      }}
                    ></div>
                  </div>
                  <span className={styles.stockPercentage}>
                    {item.total_sold}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
