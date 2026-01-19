export default function InventarioTable({ items, onCrear, onEditar, onEliminar }) {
  return (
    <div className="card">
      <div className="card-header flex justify-between">
        <h2 className="text-xl font-bold">Inventario</h2>
        <button className="btn-primary" onClick={onCrear}>+ Nuevo artículo</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Artículo</th>
            <th>Categoría</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.nombre}</td>
              <td>{i.categoria}</td>
              <td>{i.cantidad}</td>
              <td>{i.unidad}</td>
              <td className="flex gap-2">
                <button className="btn-secondary" onClick={() => onEditar(i)}>Editar</button>
                <button className="btn-danger" onClick={() => onEliminar(i.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
