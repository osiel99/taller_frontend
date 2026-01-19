import { useState } from "react";
import inventarioService from "../../services/inventarioService";

export default function InventarioForm({ initialData, onCancel, onSuccess }) {
  const [form, setForm] = useState(
    initialData || {
      nombre: "",
      categoria: "",
      cantidad: "",
      unidad: "",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (initialData) {
      await inventarioService.update(initialData.id, form);
    } else {
      await inventarioService.create(form);
    }

    onSuccess();
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Editar artículo" : "Nuevo artículo"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre del artículo" />
        <input name="categoria" value={form.categoria} onChange={handleChange} placeholder="Categoría" />
        <input name="cantidad" value={form.cantidad} onChange={handleChange} placeholder="Cantidad" />
        <input name="unidad" value={form.unidad} onChange={handleChange} placeholder="Unidad (ej. piezas, litros)" />

        <div className="flex gap-2">
          <button type="submit" className="btn-primary">Guardar</button>
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
