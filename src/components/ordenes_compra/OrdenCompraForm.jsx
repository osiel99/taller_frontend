import { useEffect, useState } from "react";
import ordenesCompraService from "../../services/ordenesCompraService";
import refaccionesService from "../../services/refaccionesService";

export default function OrdenCompraForm({ onCancel, onSuccess }) {
  const [refacciones, setRefacciones] = useState([]);

  const [form, setForm] = useState({
    proveedor: "",
    factura: "",
    detalles: [],
  });

  useEffect(() => {
    const cargar = async () => {
      const data = await refaccionesService.getAll();
      setRefacciones(data);
    };
    cargar();
  }, []);

  const agregarDetalle = () => {
    setForm({
      ...form,
      detalles: [
        ...form.detalles,
        { refaccion_id: "", cantidad: 1, precio_unitario: 0 },
      ],
    });
  };

  const actualizarDetalle = (i, campo, valor) => {
    const nuevos = [...form.detalles];
    nuevos[i][campo] = valor;
    setForm({ ...form, detalles: nuevos });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ordenesCompraService.create(form);
    onSuccess();
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">Nueva Orden de Compra</h2>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <input
          placeholder="Proveedor"
          value={form.proveedor}
          onChange={(e) => setForm({ ...form, proveedor: e.target.value })}
        />

        <input
          placeholder="Factura (opcional)"
          value={form.factura}
          onChange={(e) => setForm({ ...form, factura: e.target.value })}
        />

        <h3 className="font-bold">Detalles</h3>

        {form.detalles.map((d, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">

            <select
              value={d.refaccion_id}
              onChange={(e) =>
                actualizarDetalle(i, "refaccion_id", Number(e.target.value))
              }
            >
              <option value="">Seleccione refacción</option>
              {refacciones.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.descripcion}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={d.cantidad}
              onChange={(e) =>
                actualizarDetalle(i, "cantidad", Number(e.target.value))
              }
              placeholder="Cantidad"
            />

            <input
              type="number"
              value={d.precio_unitario}
              onChange={(e) =>
                actualizarDetalle(i, "precio_unitario", Number(e.target.value))
              }
              placeholder="Precio unitario"
            />
          </div>
        ))}

        <button type="button" className="btn-secondary" onClick={agregarDetalle}>
          + Agregar detalle
        </button>

        <div className="flex gap-2 mt-4">
          <button type="submit" className="btn-primary">Guardar</button>
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
