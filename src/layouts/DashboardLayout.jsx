import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col gap-4">

        <h2 className="text-xl font-bold mb-4">Taller Municipal</h2>

        <nav className="flex flex-col gap-2">

          <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>

          {/* NUEVOS MÓDULOS */}
          <Link to="/dashboard/ordenes-compra" className="hover:bg-gray-700 p-2 rounded">
            Órdenes de Compra
          </Link>

          <Link to="/dashboard/recepciones" className="hover:bg-gray-700 p-2 rounded">
            Recepciones
          </Link>

        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-6 overflow-auto bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
}
