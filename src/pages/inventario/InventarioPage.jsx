import { useEffect, useState } from "react";
import inventarioService from "../../services/inventarioService";
import InventarioTable from "../../components/inventario/InventarioTable";
import InventarioForm from "../../components/inventario/InventarioForm";

export default function InventarioPage() {
  const [items, setItems] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear | editar
  const [itemEdit, setItemEdit] = useState(null);

  const cargarInventario = async () => {
    const data = await inventarioService.getAll();
    setItems(data);
  };

  useEffect(() => {
    cargarInventario();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <InventarioTable
          items={items}
          onCrear={() => setModo("crear")}
          onEditar={(i) => {
            setItemEdit(i);
            setModo("editar");
          }}
          onEliminar={async (id) => {
            await inventarioService.remove(id);
            cargarInventario();
          }}
        />
      )}

      {(modo === "crear" || modo === "editar") && (
        <InventarioForm
          initialData={itemEdit}
          onCancel={() => setModo("lista")}
          onSuccess={() => {
            cargarInventario();
            setModo("lista");
          }}
        />
      )}
    </div>
  );
}
