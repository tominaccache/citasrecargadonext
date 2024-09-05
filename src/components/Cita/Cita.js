import React from 'react';
import './Cita.css';

function Cita ({cita, eliminarCita}) {
  return (
    <div > 
    
    <div className="cita" style={{ width: '70%', marginLeft:'12%'}} >
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Síntomas: <span>{cita.sintomas}</span></p>
      <button className="button eliminar u-full-width" style={{ width: '70%'}} onClick={() => eliminarCita(cita.id)}>Eliminar ×</button>
    </div>
    </div>
  );
}

export default Cita;