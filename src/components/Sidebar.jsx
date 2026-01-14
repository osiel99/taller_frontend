import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: "240px",
      background: "#1e293b",
      color: "white",
      height: "100vh",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <h2 style={{ marginBottom: "30px" }}>Taller Municipal</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
        <Link to="/vehiculos" style={{ color: "white" }}>Vehículos</Link>
        <Link to="/ordenes" style={{ color: "white" }}>Órdenes de Servicio</Link>
        <Link to="/inventario" style={{ color: "white" }}>Inventario</Link>
        <Link to="/compras" style={{ color: "white" }}>Compras</Link>
        <Link to="/reportes" style={{ color: "white" }}>Reportes</Link>
        <Link to="/usuarios" style={{ color: "white" }}>Usuarios</Link>
      </nav>
    </div>
  );
}
