import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ordenesCompraService from "../../services/ordenesCompraService";
import OrdenCompraDetalle from "../../components/ordenes_compra/OrdenCompraDetalle";

export default function OrdenCompraDetallePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const cargar = async () => {
      const d = await ordenesCompraService.getById(id);
      setData(d);
    };
    cargar();
  }, [id]);

  if (!data) return <p>Cargando...</p>;

  return <OrdenCompraDetalle data={data} />;
}
