import { useState, useEffect } from "react";
import ordenesServicioService from "../../services/ordenesServicioService";
import vehiculosService from "../../services/vehiculosService";

export default function OrdenServicioForm({ initialData, onCancel, onSuccess }) {
  const [vehiculos, setVehiculos] = useState([]);
  const [form, setForm] = useState(
    initialData || {
      vehiculo_id: "",
      fecha: "",
      descripcion: "",
      estatus: "Pendiente",
    }
  );

  useEffect(() => {
    const cargarVehiculos = async () => {
      const data = await vehiculosService.getAll();
      setVehiculos(data);
    };
    cargarVehiculos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (initialData) {
      await ordenesServicioService.update(initialData.id, form);
    } else {
      await ordenesServicioService.create(form);
    }

    onSuccess();
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Editar Orden" : "Nueva Orden de Servicio"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <select name="vehiculo_id" value={form.vehiculo_id} onChange={handleChange}>
          <option value="">Seleccione un vehículo</option>
          {vehiculos.map((v) => (
            <option key={v.id} value={v.id}>
              {v.placa} - {v.marca} {v.modelo}
            </option>
          ))}
        </select>

        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />

        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          placeholder="Descripción del servicio"
        />

        <select name="estatus" value={form.estatus} onChange={handleChange}>
          <option value="Pendiente">Pendiente</option>
          <option value="En proceso">En proceso</option>
          <option value="Finalizado">Finalizado</option>
        </select>

        <div className="flex gap-2">
          <button type="submit" className="btn-primary">Guardar</button>
          <button type="button" className="btn-secondary" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}
