import { BrowserRouter, Routes, Route } from "react-router-dom";

// PÁGINAS PRINCIPALES
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

// LAYOUT
import DashboardLayout from "../layouts/DashboardLayout";

// MÓDULO VEHÍCULOS
import VehiculosPage from "../pages/vehiculos/VehiculosPage";

// MÓDULO ÓRDENES DE SERVICIO
import OrdenesServicioPage from "../pages/ordenes/OrdenesServicioPage";

// MÓDULO INVENTARIO
import InventarioPage from "../pages/inventario/InventarioPage";

// MODUULO COMPRAS
import ComprasPage from "../pages/compras/ComprasPage";

// MODULO PROVEEDORES
import ProveedoresPage from "../pages/proveedores/ProveedoresPage";

// PROTECCIÓN DE RUTAS
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* RUTA PÚBLICA */}
        <Route path="/" element={<LoginPage />} />

        {/* RUTAS PROTEGIDAS */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* VEHÍCULOS */}
        <Route
          path="/vehiculos"
          element={
            <DashboardLayout>
              <VehiculosPage />
            </DashboardLayout>
          }
        />

        {/* ÓRDENES DE SERVICIO */}
        <Route
          path="/ordenes"
          element={
            <DashboardLayout>
              <OrdenesServicioPage />
            </DashboardLayout>
          }
        />

        {/* INVENTARIO */}
        <Route
          path="/inventario"
          element={
            <DashboardLayout>
              <InventarioPage />
            </DashboardLayout>
          }
        />
         {/* COMPRAS */}
        <Route
          path="/compras"
          element={
             <DashboardLayout>
                <ComprasPage />
             </DashboardLayout>
         }
         />

        {/* PROVEEDORES */}
        <Route
          path="/proveedores"
          element={
            <DashboardLayout>
              <ProveedoresPage />
            </DashboardLayout>
          }
      />

      </Routes>
    </BrowserRouter>
  );
}
