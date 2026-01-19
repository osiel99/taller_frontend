import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import DashboardLayout from "../layouts/DashboardLayout";

// Páginas existentes
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

// Nuevos módulos
import OrdenesCompraPage from "../pages/ordenes_compra/OrdenesCompraPage";
import RecepcionesPage from "../pages/recepciones/RecepcionesPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<LoginPage />} />

        {/* RUTAS PROTEGIDAS */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard principal */}
          <Route index element={<DashboardPage />} />

          {/* NUEVAS RUTAS PROFESIONALES */}
          <Route path="ordenes-compra" element={<OrdenesCompraPage />} />
          <Route path="recepciones" element={<RecepcionesPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
