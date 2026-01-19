import { useState, useEffect } from "react";
import comprasService from "../../services/comprasService";
import inventarioService from "../../services/inventarioService";

export default function CompraForm({ initialData, onCancel, onSuccess }) {
  const [articulos, setArticulos] = useState([]);

  const [form, setForm] = useState(
    initialData || {
      proveedor_id: "",
      fecha: "",
      observaciones: "",
      partidas: [],
      subtotal: 0,
      iva: 0,
      total: 0,
    }
  );

  useEffect(() => {
    const cargarArticulos = async () => {
      const data = await inventarioService.getAll();
      setArticulos(data);
    };
    cargarArticulos();
  }, []);

  const agregarPartida = () => {
    setForm({
      ...form,
      partidas: [
        ...form.partidas,
        { articulo_id: "", cantidad: 1, precio_unitario: 0, importe: 0 },
      ],
    });
  };

  const actualizarPartida = (index, campo, valor) => {
    const nuevas = [...form.partidas];
    nuevas[index][campo] = valor;

    if (campo === "cantidad" || campo === "precio_unitario") {
      nuevas[index].importe =
        nuevas[index].cantidad * nuevas[index].precio_unitario;
    }

    setForm({ ...form, partidas: nuevas });
  };

  const calcularTotales = () => {
    const subtotal = form.partidas.reduce((acc, p) => acc + p.importe, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    setForm({ ...form, subtotal, iva, total });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    calcularTotales();

    if (initialData) {
      await comprasService.update(initialData.id, form);
    } else {
      await comprasService.create(form);
    }

    onSuccess();
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">
        {initialData ? "Editar compra" : "Nueva compra"}
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <input
          name="proveedor_id"
          value={form.proveedor_id}
          onChange={(e) => setForm({ ...form, proveedor_id: e.target.value })}
          placeholder="Proveedor"
        />

        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={(e) => setForm({ ...form, fecha: e.target.value })}
        />

        <textarea
          name="observaciones"
          value={form.observaciones}
          onChange={(e) => setForm({ ...form, observaciones: e.target.value })}
          placeholder="Observaciones"
        />

        <h3 className="font-bold">Partidas</h3>

        {form.partidas.map((p, i) => (
          <div key={i} className="grid grid-cols-4 gap-2">
            <select
              value={p.articulo_id}
              onChange={(e) => actualizarPartida(i, "articulo_id", e.target.value)}
            >
              <option value="">Seleccione artículo</option>
              {articulos.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nombre}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={p.cantidad}
              onChange={(e) => actualizarPartida(i, "cantidad", Number(e.target.value))}
              placeholder="Cantidad"
            />

            <input
              type="number"
              value={p.precio_unitario}
              onChange={(e) =>
                actualizarPartida(i, "precio_unitario", Number(e.target.value))
              }
              placeholder="Precio unitario"
            />

            <input value={p.importe} readOnly placeholder="Importe" />
          </div>
        ))}

        <button type="button" className="btn-secondary" onClick={agregarPartida}>
          + Agregar partida
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
