import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProveedoresPage from "./pages/ProveedoresPage";// from "./pages/ProveedoresPage";
import ProveedoresFormPage from "./pages/ProveedoresFormPage";
import { Navigation } from "./componets/Navigation";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/proveedores" />}></Route>
        <Route path="/proveedores" element={<ProveedoresPage />}></Route>
        <Route path="/proveedores-create" element={<ProveedoresFormPage />}></Route>
        <Route path="/proveedores/:id" element={<ProveedoresFormPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
