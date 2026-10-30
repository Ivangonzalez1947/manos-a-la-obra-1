function Pendiente({ pendiente, alAlternar, alQuitar }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={pendiente.hecho}
        onChange={() => alAlternar(pendiente.id)}
      />

      <span
        style={{
          textDecoration: pendiente.hecho ? "line-through" : "none",
        }}
      >
        {pendiente.titulo}
      </span>

      <button onClick={() => alQuitar(pendiente.id)}>Quitar</button>
    </li>
  );
}

export default Pendiente;
