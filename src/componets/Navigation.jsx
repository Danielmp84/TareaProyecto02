import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <div>
      <Link to={"/proveedores"}>
        <h1>Proveedor</h1>
      </Link>
      <Link to={"/proveedores-create"}>Nuevo proveedor</Link>
    </div>
  );
}
