import axios from "axios";

const proveedorApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/doctores/",
});

export const getAllProveedores = () => {
  //return axios.get("http://127.0.0.1:8000/api/v1/doctores/");
  return proveedorApi.get("/");
};

export const createProveedores = (proveedor) => {
  return proveedorApi.post("/", proveedor);
};

export const deleteProveedores = (id) => {
  return proveedorApi.delete(`/${id}`);
};
