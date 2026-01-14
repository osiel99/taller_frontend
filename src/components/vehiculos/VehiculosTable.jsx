export default function VehiculosTable({ vehiculos, onCrear, onEditar, onEliminar }) {
  return (
    <div className="card">
      <div className="card-header flex justify-between">
        <h2 className="text-xl font-bold">Vehículos</h2>
        <button className="btn-primary" onClick={onCrear}>+ Nuevo vehículo</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Año</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((v) => (
            <tr key={v.id}>
              <td>{v.placa}</td>
              <td>{v.marca}</td>
              <td>{v.modelo}</td>
              <td>{v.anio}</td>
              <td className="flex gap-2">
                <button className="btn-secondary" onClick={() => onEditar(v)}>Editar</button>
                <button className="btn-danger" onClick={() => onEliminar(v.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
