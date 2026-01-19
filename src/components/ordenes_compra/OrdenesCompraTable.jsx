export default function OrdenesCompraTable({ ordenes, onCrear }) {
  return (
    <div className="card">
      <div className="card-header flex justify-between">
        <h2 className="text-xl font-bold">Órdenes de Compra</h2>
        <button className="btn-primary" onClick={onCrear}>
          + Nueva Orden
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Proveedor</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Factura</th>
          </tr>
        </thead>

        <tbody>
          {ordenes.map((oc) => (
            <tr key={oc.id}>
              <td>{oc.id}</td>
              <td>{oc.proveedor}</td>
              <td>{new Date(oc.fecha_oc).toLocaleDateString()}</td>
              <td>{oc.estado}</td>
              <td>{oc.factura || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
