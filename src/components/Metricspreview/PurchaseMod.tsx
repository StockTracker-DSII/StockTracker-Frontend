"use client"
import styles from "../../styles/Modal.module.css"
import type React from "react"
import { X, Package, DollarSign, Hash } from "lucide-react"
import { useEffect, useState } from "react"

interface AddItemModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: AddItemModalProps) {
  const [formData, setFormData] = useState({
    product: "",
    valueindividual: "",
    quantity: "",
    valuequantity: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    onClose()
    setFormData({ product: "", valueindividual: "", quantity: "", valuequantity: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const [activeTab, setActiveTab] = useState<"purchase" | "sales">("purchase");

  const [productOptions, setProductOptions] = useState<{ id: number, name: string ,bought_price: number, sale_price: number}[]>([]);
  
  useEffect(() => {
  if (isOpen) {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {console.log("Productos recibidos:", data);setProductOptions(data);
      })
      .catch(err => console.error("Error fetching products", err));
  }
   }, [isOpen]);

  const getSelectedProduct = () => {
  return productOptions.find(p => String(p.id) === String(formData.product));
};

  useEffect(() => {
  const selected = getSelectedProduct();
  if (selected) {
    setFormData(prev => ({
      ...prev,
      valueindividual:
        activeTab === "purchase"
          ? selected.bought_price.toString()
          : selected.sale_price.toString()
    }));
  }
}, [formData.product, activeTab, productOptions]);

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <Package className={styles.titleIcon} />
            <h2>Billing</h2>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.modalActions} style={{ justifyContent: "center", marginBottom: "0" }}>
         <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>
          {activeTab === "purchase" ? "Purchases" : "Sales"}
         </h2>
         <button
          className={styles.cancelButton}
          type="button"
          onClick={() =>
          setActiveTab((prev) => (prev === "purchase" ? "sales" : "purchase"))}
  >       {activeTab === "purchase" ? "Go to Sales" : "Go to Purchase"}
         </button>
        </div>

      {activeTab === "purchase" ? (
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label htmlFor="product" className={styles.label}>
                <Package size={16} />
                Product
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select product</option>
                  {productOptions.map((product) => (
                   <option key={product.id} value={String(product.id)}>
                    {product.name}
                   </option>
  ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="valueindividual" className={styles.label}>
                <DollarSign size={16} />
                Value individual
              </label>
              <input
               type="number"
               id="valueindividual"
               name="valueindividual"
               value={formData.valueindividual}
               className={styles.input}
               readOnly
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="quantity" className={styles.label}>
                <Hash size={16} />
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={styles.input}
                placeholder="0"
                min="0"
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="valuequantity" className={styles.label}>
              Value quantity
            </label>
            <input
                type="number"
                id="valuequantity"
                name="valuequantity"
                value={formData.valuequantity}
                onChange={handleChange}
                className={styles.input}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
          </div>

          <div className={styles.modalActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              <Package size={16} />
              Make Purchase
            </button>
          </div>
        </form>
        ) : (
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label htmlFor="product" className={styles.label}>
                <Package size={16} />
                Product
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="">Select product</option>
                  {productOptions.map((product) => (
                   <option key={product.id} value={String(product.id)}>
                      {product.name}
                   </option>
  ))}
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="quantity" className={styles.label}>
                <Hash size={16} />
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={styles.input}
                placeholder="0"
                min="0"
                required
              />
            </div>
          </div>

          <div className={styles.modalActions}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancel
            </button>
            <button type="submit" className={styles.submitButton}>
              <Package size={16} />
              Make Sale
            </button>
          </div>
        </form>
        )}  
      </div>
    </div>
  )
}
