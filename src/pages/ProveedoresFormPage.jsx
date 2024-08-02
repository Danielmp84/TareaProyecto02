import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { createProveedores, deleteProveedores } from "../api/proveedores.api";

export default function DoctoresFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createProveedores(data);
    console.log(res);
    navigate("/proveedores");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("nombre", { required: true })}
          placeholder="Ingrese el nombre"
        />
        {errors.nombre && <span>Este campo es requerido</span>}
        <input
          type="text"
          {...register("apellido", { required: true })}
          placeholder="Ingrese el apellido"
        />
        {errors.apellido && <span>Este campo es requerido</span>}
        <input
          type="text"
          {...register("RUC", { required: false })}
          placeholder="Ingrese el RUC del Proveedor"
        />
        {errors.RUC && <span>Este campo es requerido</span>}
        <button>Guardar</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const aceptado = window.confirm(
              "Estas seguro de eliminar al proveedor?"
            );
            if (aceptado) {
              await deleteProveedores(params.id);
              navigate("/proveedores");
            }
          }}
        >
          Eliminar Proveedor
        </button>
      )}
    </div>
  );
}
