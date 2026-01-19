import { useState } from "react";
import proveedoresService from "../../services/proveedoresService";

export default function ProveedorForm({ initialData, onCancel, onSuccess }) {
  const [form, setForm] = useState(
    initialData || {
      nombre: "",
      rfc: "",
      telefono: "",
      direccion: "",
      condiciones_pago: "",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (initialData) {
      await proveedoresService.update(initialData.id, form);
    } else {
      await proveedoresService.create(form);
    }

    onSuccess();
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Editar proveedor" : "Nuevo proveedor"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre del proveedor" />
        <input name="rfc" value={form.rfc} onChange={handleChange} placeholder="RFC" />
        <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" />
        <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección" />
        <input name="condiciones_pago" value={form.condiciones_pago} onChange={handleChange} placeholder="Condiciones de pago" />

        <div className="flex gap-2">
          <button type="submit" className="btn-primary">Guardar</button>
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
