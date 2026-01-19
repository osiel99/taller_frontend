import { useEffect, useState } from "react";
import ordenesServicioService from "../../services/ordenesServicioService";
import OrdenesServicioTable from "../../components/ordenes/OrdenesServicioTable";
import OrdenServicioForm from "../../components/ordenes/OrdenServicioForm";

export default function OrdenesServicioPage() {
  const [ordenes, setOrdenes] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear | editar
  const [ordenEdit, setOrdenEdit] = useState(null);

  const cargarOrdenes = async () => {
    const data = await ordenesServicioService.getAll();
    setOrdenes(data);
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <OrdenesServicioTable
          ordenes={ordenes}
          onCrear={() => setModo("crear")}
          onEditar={(o) => {
            setOrdenEdit(o);
            setModo("editar");
          }}
          onEliminar={async (id) => {
            await ordenesServicioService.remove(id);
            cargarOrdenes();
          }}
        />
      )}

      {(modo === "crear" || modo === "editar") && (
        <OrdenServicioForm
          initialData={ordenEdit}
          onCancel={() => setModo("lista")}
          onSuccess={() => {
            cargarOrdenes();
            setModo("lista");
          }}
        />
      )}
    </div>
  );
}
