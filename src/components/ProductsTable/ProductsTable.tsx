import { useEffect, useState } from "react";
import styles from "../../styles/ProductsTable.module.css";
import ProductFormModal from "./ProductFormModal";

interface Product {
  product_id: string;
  name: string;
  sale_price: number;
  description: string;
  stock: number;
  isActive: boolean;
}

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function ProductsTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const defaultColor = "#4E9FD1";

  const fetchProducts = () => {
    setLoading(true);
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
  };

  const toggleEstado = async (product_id: string) => {
    try {
      const res = await fetch(`${API_URL}/products/available`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id }),
      });

      const result = await res.json();
      alert(result.message);
      fetchProducts();
    } catch (error) {
      console.error("Error al cambiar estado:", error);
      alert("Error al cambiar estado del producto");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Productos</h2>
        <span className={styles.subtitle}>{products.length} disponibles</span>
      </div>

      {/* Modal para crear nuevo producto */}
      <ProductFormModal onProductCreated={fetchProducts} />

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.columnHeader}>NOMBRE</div>
          <div className={styles.columnHeader}>UNIDADES</div>
          <div className={styles.columnHeader}>STOCK</div>
          <div className={styles.columnHeader}>ACCIÓN</div>
        </div>
        <div className={styles.tableBody}>
          {products.map((product) => (
            <div key={product.product_id} className={styles.tableRow}>
              <div className={styles.nameCell}>
                <div
                  className={styles.productIcon}
                  style={{ backgroundColor: defaultColor }}
                ></div>
                <span className={styles.productName}>{product.name}</span>
                <span className={styles.productName}>{product.description}</span>
              </div>

              <div className={styles.costCell}>
                {product.sale_price ? `$${product.sale_price}` : "Sin precio"}
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

              <div>
                <button onClick={() => toggleEstado(product.product_id)}>
                  {product.isActive ? "Desactivar" : "Activar"}
                </button>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div style={{ padding: "1rem" }}>No hay productos registrados.</div>
          )}
        </div>
      </div>
    </div>
  );
}
