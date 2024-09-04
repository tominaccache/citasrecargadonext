import React from 'react';
import Cita from '../Cita/Cita.js';
import Subtitulo from '../Subtitulo/Subtitulo.js';

function ListaCitas({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <Subtitulo texto="Administra tus citas" />
      {citas.map(cita => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
}

export default ListaCitas;