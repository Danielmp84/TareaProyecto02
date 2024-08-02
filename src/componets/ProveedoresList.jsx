import React, { useEffect, useState } from "react";
import { getAllProveedores } from "../api/proveedores.api";
import { ProveedoresCard } from "./ProveedoresCard";

export function DoctoresList() {
  const [proveedores, setProveedores] = useState([]);
  useEffect(() => {
    async function loadProveedores() {
      const res = await getAllProveedores();
      setProveedores(res.data);
      console.log(res.data);
    }
    loadProveedores();
  }, []);
  return (
    <div>
      {proveedores.map((proveedor) => (
        <ProveedoresCard key={proveedor.id} proveedor={proveedor} />
      ))}
    </div>
  );
}
