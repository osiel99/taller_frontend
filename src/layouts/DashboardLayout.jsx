import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../services/authService";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const isActive = (path) =>
    location.pathname === path
      ? "bg-gray-700 p-2 rounded"
      : "hover:bg-gray-700 p-2 rounded";

  return (
    <div className="flex h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-4">

        <h2 className="text-xl font-bold mb-4">Taller Municipal</h2>

        <nav className="flex flex-col gap-2">

          <Link to="/dashboard" className={isActive("/dashboard")}>
            Dashboard
          </Link>

          <Link to="/dashboard/vehiculos" className={isActive("/dashboard/vehiculos")}>
            Vehículos
          </Link>

          <Link to="/dashboard/ordenes-servicio" className={isActive("/dashboard/ordenes-servicio")}>
            Órdenes de Servicio
          </Link>

          <Link to="/dashboard/ordenes-compra" className={isActive("/dashboard/ordenes-compra")}>
            Órdenes de Compra
          </Link>

          <Link to="/dashboard/recepciones" className={isActive("/dashboard/recepciones")}>
            Recepciones
          </Link>

          <Link to="/dashboard/inventario" className={isActive("/dashboard/inventario")}>
            Inventario
          </Link>

          <Link to="/dashboard/proveedores" className={isActive("/dashboard/proveedores")}>
            Proveedores
          </Link>

        </nav>

        {/* BOTÓN DE LOGOUT */}
        <button
          onClick={handleLogout}
          className="mt-auto bg-red-600 hover:bg-red-700 p-2 rounded text-center"
        >
          Cerrar sesión
        </button>

      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 overflow-auto bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
}
