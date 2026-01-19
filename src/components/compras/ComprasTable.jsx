export default function ComprasTable({ compras, onCrear, onEditar, onEliminar }) {
  return (
    <div className="card">
      <div className="card-header flex justify-between">
        <h2 className="text-xl font-bold">Compras</h2>
        <button className="btn-primary" onClick={onCrear}>+ Nueva compra</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Fecha</th>
            <th>Subtotal</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {compras.map((c) => (
            <tr key={c.id}>
              <td>{c.proveedor_id}</td>
              <td>{c.fecha}</td>
              <td>{c.subtotal}</td>
              <td>{c.total}</td>
              <td className="flex gap-2">
                <button className="btn-secondary" onClick={() => onEditar(c)}>Editar</button>
                <button className="btn-danger" onClick={() => onEliminar(c.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
