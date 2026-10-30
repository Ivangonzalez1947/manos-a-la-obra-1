import Pendiente from "./Pendiente";

function ListaPendientes({ pendientes, alAlternar, alQuitar }) {
  if (pendientes.length === 0) {
    return <p>No quedan pendientes.</p>;
  }

  return (
    <ul>
      {pendientes.map((p) => (
        <Pendiente
          key={p.id}
          pendiente={p}
          alAlternar={alAlternar}
          alQuitar={alQuitar}
        />
      ))}
    </ul>
  );
}

export default ListaPendientes;
