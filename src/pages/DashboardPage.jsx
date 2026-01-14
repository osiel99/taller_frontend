import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/dashboard/general", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Dashboard General</h1>

      {!data && <p>Cargando...</p>}

      {data && (
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{
            background: "#e2e8f0",
            padding: "20px",
            borderRadius: "8px",
            width: "200px"
          }}>
            <h3>Vehículos</h3>
            <p>{data.total_vehiculos}</p>
          </div>

          <div style={{
            background: "#e2e8f0",
            padding: "20px",
            borderRadius: "8px",
            width: "200px"
          }}>
            <h3>Órdenes activas</h3>
            <p>{data.ordenes_activas}</p>
          </div>

          <div style={{
            background: "#e2e8f0",
            padding: "20px",
            borderRadius: "8px",
            width: "200px"
          }}>
            <h3>Refacciones bajas</h3>
            <p>{data.refacciones_bajo_inventario}</p>
          </div>
        </div>
      )}
    </div>
  );
}
