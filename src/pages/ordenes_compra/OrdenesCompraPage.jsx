import { useEffect, useState } from "react";
import ordenesCompraService from "../../services/ordenesCompraService";
import OrdenesCompraTable from "../../components/ordenes_compra/OrdenesCompraTable";
import OrdenCompraForm from "../../components/ordenes_compra/OrdenCompraForm";

export default function OrdenesCompraPage() {
  const [ordenes, setOrdenes] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear
  const [ocEdit, setOcEdit] = useState(null);

  const cargarOrdenes = async () => {
    const data = await ordenesCompraService.getAll();
    setOrdenes(data);
  };

  useEffect(() => {
    cargarOrdenes();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <OrdenesCompraTable
          ordenes={ordenes}
          onCrear={() => setModo("crear")}
        />
      )}

      {modo === "crear" && (
        <OrdenCompraForm
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
