import { useEffect, useState } from "react";
import comprasService from "../../services/comprasService";
import ComprasTable from "../../components/compras/ComprasTable";
import CompraForm from "../../components/compras/CompraForm";

export default function ComprasPage() {
  const [compras, setCompras] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear | editar
  const [compraEdit, setCompraEdit] = useState(null);

  const cargarCompras = async () => {
    const data = await comprasService.getAll();
    setCompras(data);
  };

  useEffect(() => {
    cargarCompras();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <ComprasTable
          compras={compras}
          onCrear={() => setModo("crear")}
          onEditar={(c) => {
            setCompraEdit(c);
            setModo("editar");
          }}
          onEliminar={async (id) => {
            await comprasService.remove(id);
            cargarCompras();
          }}
        />
      )}

      {(modo === "crear" || modo === "editar") && (
        <CompraForm
          initialData={compraEdit}
          onCancel={() => setModo("lista")}
          onSuccess={() => {
            cargarCompras();
            setModo("lista");
          }}
        />
      )}
    </div>
  );
}
