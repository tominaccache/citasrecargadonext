import React, { useState } from 'react';
import './App.css';
import './index.css'; 
import HacerCita from '../src/components/HacerCita/HacerCita';
import ListaCitas from '../src/components/ListaCitas/ListaCitas';
import Titulo from '../src/components/Titulo/Titulo';


function App() {
  const [citas, setCitas] = useState([
    { id: 1, mascota: 'Nina', propietario: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna' },
    { id: 2, mascota: 'Sifon', propietario: 'Flecha', fecha: '2023-08-05', hora: '09:24', sintomas: 'Duerme mucho' },
    { id: 3, mascota: 'Floki', propietario: 'Ari', fecha: '2023-08-05', hora: '16:15', sintomas: 'No está comiendo' }
  ]);

  const agregarCita = (nuevaCita) => {
    const confirmacion = window.confirm('¿Está seguro de que desea agregar esta cita?');
    if (confirmacion) {
      const nuevasCitas = [...citas, nuevaCita];
      setCitas(nuevasCitas);
    }
  };

  const eliminarCita = (id) => {
    const confirmacion = window.confirm('¿Está seguro de que desea eliminar esta cita?');
    if (confirmacion) {
      const nuevasCitas = citas.filter(cita => cita.id !== id );
      setCitas(nuevasCitas);
    }
  };


  return (
    <div className="App">
      <Titulo />
      
      <div className="container">
        
        <div className="row">
          <HacerCita  agregarCita={agregarCita} />
          <ListaCitas citas={citas} eliminarCita={eliminarCita}/>
        </div>
      </div>
    </div>
  );
}

export default App;