import React, { useEffect, useState } from 'react';

type Category = {
  category_id: string;
  name: string;
};

interface Props {
  onProductCreated: () => void;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const ProductFormModal: React.FC<Props> = ({ onProductCreated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    sale_price: '',
    bought_price: '',
    category_id: '',
  });

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((err) => console.error('Error al cargar categorías', err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/products/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          sale_price: parseFloat(form.sale_price),
          bought_price: parseFloat(form.bought_price),
        }),
      });

      if (!res.ok) throw new Error('Error al crear producto');

      alert('Producto creado correctamente');
      setIsOpen(false);
      onProductCreated();
    } catch (err) {
      alert('Error al crear producto');
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Nuevo Producto</button>

      {isOpen && (
        <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '1rem' }}>
          <h3>Crear producto</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              required
            />
            <br />
            <input
              name="description"
              placeholder="Descripción"
              value={form.description}
              onChange={handleChange}
              required
            />
            <br />
            <input
              name="sale_price"
              placeholder="Precio venta"
              type="number"
              value={form.sale_price}
              onChange={handleChange}
              required
            />
            <br />
            <input
              name="bought_price"
              placeholder="Precio compra"
              type="number"
              value={form.bought_price}
              onChange={handleChange}
              required
            />
            <br />
            <select name="category_id" value={form.category_id} onChange={handleChange} required>
              <option value="">Selecciona una categoría</option>
              {categories.map((cat) => (
                <option key={cat.category_id} value={cat.category_id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Guardar</button>
            <button type="button" onClick={() => setIsOpen(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductFormModal;
