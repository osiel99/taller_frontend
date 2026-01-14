import { useEffect, useState } from "react";
import VehiculosTable from "../../components/vehiculos/VehiculosTable";
import VehiculoForm from "../../components/vehiculos/VehiculoForm";
import vehiculosService from "../../services/vehiculosService";

export default function VehiculosPage() {
  const [vehiculos, setVehiculos] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear | editar
  const [vehiculoEdit, setVehiculoEdit] = useState(null);

  const cargarVehiculos = async () => {
    const data = await vehiculosService.getAll();
    setVehiculos(data);
  };

  useEffect(() => {
    cargarVehiculos();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <VehiculosTable
          vehiculos={vehiculos}
          onCrear={() => setModo("crear")}
          onEditar={(v) => {
            setVehiculoEdit(v);
            setModo("editar");
          }}
          onEliminar={async (id) => {
            await vehiculosService.remove(id);
            cargarVehiculos();
          }}
        />
      )}

      {(modo === "crear" || modo === "editar") && (
        <VehiculoForm
          initialData={vehiculoEdit}
          onCancel={() => setModo("lista")}
          onSuccess={() => {
            cargarVehiculos();
            setModo("lista");
          }}
        />
      )}
    </div>
  );
}
