import { useEffect, useState } from "react";
import recepcionesService from "../../services/recepcionesService";
import RecepcionesTable from "../../components/recepciones/RecepcionesTable";
import RecepcionForm from "../../components/recepciones/RecepcionForm";

export default function RecepcionesPage() {
  const [recepciones, setRecepciones] = useState([]);
  const [modo, setModo] = useState("lista"); // lista | crear

  const cargarRecepciones = async () => {
    const data = await recepcionesService.getAll();
    setRecepciones(data);
  };

  useEffect(() => {
    cargarRecepciones();
  }, []);

  return (
    <div>
      {modo === "lista" && (
        <RecepcionesTable
          recepciones={recepciones}
          onCrear={() => setModo("crear")}
        />
      )}

      {modo === "crear" && (
        <RecepcionForm
          onCancel={() => setModo("lista")}
          onSuccess={() => {
            cargarRecepciones();
            setModo("lista");
          }}
        />
      )}
    </div>
  );
}
