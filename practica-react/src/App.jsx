import { useState } from "react";
import NuevoPendiente from "./components/NuevoPendiente";
import ListaPendientes from "./components/ListaPendientes";
import "./App.css";

function App() {
  const [pendientes, setPendientes] = useState([]);

  function sumarPendiente(titulo) {
    const limpio = titulo.trim();
    if (!limpio) return;

    const nuevo = {
      id: crypto.randomUUID(),
      titulo: limpio,
      hecho: false,
    };

    setPendientes((previos) => [nuevo, ...previos]);
  }

  function alternarHecho(id) {
    setPendientes((previos) =>
      previos.map((p) => (p.id === id ? { ...p, hecho: !p.hecho } : p))
    );
  }

  function quitarPendiente(id) {
    setPendientes((previos) => previos.filter((p) => p.id !== id));
  }

  return (
    <main>
      <h1>Pendientes del día</h1>
      <h2>Lista de Iván</h2>

      <NuevoPendiente alSumar={sumarPendiente} />

      <ListaPendientes
        pendientes={pendientes}
        alAlternar={alternarHecho}
        alQuitar={quitarPendiente}
      />
    </main>
  );
}

export default App;
