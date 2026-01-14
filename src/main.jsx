import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";

<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    </PrivateRoute>
  }
/>

