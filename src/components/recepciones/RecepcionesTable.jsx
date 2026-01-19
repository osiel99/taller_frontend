export default function RecepcionesTable({ recepciones, onCrear }) {
  return (
    <div className="card">
      <div className="card-header flex justify-between">
        <h2 className="text-xl font-bold">Recepciones</h2>
        <button className="btn-primary" onClick={onCrear}>
          + Nueva Recepción
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>OC</th>
            <th>Fecha</th>
            <th>Recibido por</th>
          </tr>
        </thead>

        <tbody>
          {recepciones.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.oc_id}</td>
              <td>{new Date(r.fecha_recepcion).toLocaleDateString()}</td>
              <td>{r.recibido_por}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
