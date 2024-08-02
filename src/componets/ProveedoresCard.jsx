import React from "react";
import { useNavigate } from "react-router-dom";

export function DoctoresCard({ proveedor }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ background: "#000" }}
      onClick={() => {
        navigate("/proveedores/" + proveedor.id);
      }}
    >
      <h1>
        {proveedor.nombre} {proveedor.apellido}
      </h1>
      <p>{proveedor.RUC}</p>
      <hr />
    </div>
  );
}
