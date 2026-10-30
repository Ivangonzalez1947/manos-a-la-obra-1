import { useState } from "react";

function NuevoPendiente({ alSumar }) {
  const [entrada, setEntrada] = useState("");

  function enviar() {
    alSumar(entrada);
    setEntrada("");
  }

  return (
    <div>
      <input
        type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        placeholder="¿Qué hay que hacer?"
      />

      <button onClick={enviar}>Sumar</button>
    </div>
  );
}

export default NuevoPendiente;
