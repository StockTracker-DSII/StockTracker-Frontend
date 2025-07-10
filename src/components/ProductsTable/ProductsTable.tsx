import { useEffect, useState } from "react";
import styles from "../../styles/ProductsTable.module.css";

export default function ProductsTable() {

    interface Product {
    name: string;
    sale_price: number;
    description: string;
    stock: number;
    cost: string;
    color: string;
  }


  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultColor = "#4E9FD1";

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    fetch(`${API_URL}/products`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Products</h2>
        <span className={styles.subtitle}>{products.length} disponibles</span>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.columnHeader}>NAME</div>
          <div className={styles.columnHeader}>UNITS</div>
          <div className={styles.columnHeader}>COST</div>
          <div className={styles.columnHeader}>STOCK</div>
        </div>
        <div className={styles.tableBody}>
          {products.map((product, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.nameCell}>
                <div
                  className={styles.productIcon}
                  style={{ backgroundColor: defaultColor }}
                ></div>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productName}>{product.description}</span>                
              </div>
              <div className={styles.costCell}>
                {product.sale_price ? `$${product.sale_price}` : "Not set"}
              </div>
              <div className={styles.stockCell}>
                <div className={styles.progressContainer}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: `${product.stock || 0}%`,
                      backgroundColor: defaultColor,
                    }}
                  ></div>
                </div>
                <span className={styles.stockPercentage}>{product.stock || 0}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
