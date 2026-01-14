import { useState } from "react";
import vehiculosService from "../../services/vehiculosService";

export default function VehiculoForm({ initialData, onCancel, onSuccess }) {
  const [form, setForm] = useState(
    initialData || {
      placa: "",
      marca: "",
      modelo: "",
      anio: "",
    }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (initialData) {
      await vehiculosService.update(initialData.id, form);
    } else {
      await vehiculosService.create(form);
    }

    onSuccess();
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Editar vehículo" : "Nuevo vehículo"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input name="placa" value={form.placa} onChange={handleChange} placeholder="Placa" />
        <input name="marca" value={form.marca} onChange={handleChange} placeholder="Marca" />
        <input name="modelo" value={form.modelo} onChange={handleChange} placeholder="Modelo" />
        <input name="anio" value={form.anio} onChange={handleChange} placeholder="Año" />

        <div className="flex gap-2">
          <button type="submit" className="btn-primary">Guardar</button>
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
