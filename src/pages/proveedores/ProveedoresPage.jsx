import { useEffect, useState } from "react";
import proveedoresService from "../../services/proveedoresService";
import ProveedoresTable from "../../components/proveedores/ProveedoresTable";
import ProveedorForm from "../../components/proveedores/ProveedorForm";

export default function ProveedoresPage() {
  const [proveedores, setProveedores] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear | editar
  const [proveedorEdit, setProveedorEdit] = useState(null);

  const cargarProveedores = async () => {
    const data = await proveedoresService.getAll();
    setProveedores(data);
  };

  useEffect(() => {
    cargarProveedores();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <ProveedoresTable
          proveedores={proveedores}
          onCrear={() => setModo("crear")}
          onEditar={(p) => {
            setProveedorEdit(p);
            setModo("editar");
          }}
          onEliminar={async (id) => {
            await proveedoresService.remove(id);
            cargarProveedores();
          }}
        />
      )}

      {(modo === "crear" || modo === "editar") && (
        <ProveedorForm
          initialData={proveedorEdit}
          onCancel={() => setModo("lista")}
          onSuccess={() => {
            cargarProveedores();
            setModo("lista");
          }}
        />
      )}
    </div>
  );
}
