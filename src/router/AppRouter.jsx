import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

// IMPORTS DEL MÓDULO DE VEHÍCULOS
import DashboardLayout from "../layouts/DashboardLayout";
import VehiculosPage from "../pages/vehiculos/VehiculosPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* NUEVA RUTA DEL MÓDULO DE VEHÍCULOS */}
        <Route
          path="/vehiculos"
          element={
            <DashboardLayout>
              <VehiculosPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
