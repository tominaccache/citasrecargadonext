import React, { useState } from 'react';
import './App.css';
import './index.css';
import HacerCita from './components/HacerCita/HacerCita';
import ListaCitas from './components/ListaCitas/ListaCitas';
import Titulo from './components/Titulo/Titulo';

function App() {
  const [citas, setCitas] = useState([
    { id: 1, mascota: 'Nina', propietario: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna' },
    { id: 2, mascota: 'Sifon', propietario: 'Flecha', fecha: '2023-08-05', hora: '09:24', sintomas: 'Duerme mucho' },
    { id: 3, mascota: 'Floki', propietario: 'Ari', fecha: '2023-08-05', hora: '16:15', sintomas: 'No está comiendo' }
  ]);

  const [pagina, setPagina] = useState('home'); // Estado para manejar la navegación

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
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      setCitas(nuevasCitas);
    }
  };

  return (
    <div className="App">
      <Titulo />
      <nav>
        <button onClick={() => setPagina('home')}>Home</button>
        <button onClick={() => setPagina('quienes-somos')}>Quiénes Somos</button>
        <button onClick={() => setPagina('reservas')}>Reservas</button>
        <button onClick={() => setPagina('contacto')}>Contacto</button>
      </nav>
      
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px' }}>
    {pagina === 'home' && (
        <div>
            <h2 style={{ color: 'white', marginBottom: '15px' }}>Bienvenido a la página principal</h2>
            <p style={{ color: 'white', marginBottom: '10px' }}>¡Bienvenido a Veteriland!</p>
            <p style={{ color: 'white', marginBottom: '10px' }}>
                ¡Nos alegra que estés aquí! En Veteriland, somos más que una simple clínica: somos un equipo apasionado y dedicado al bienestar de tus mascotas. Creemos que cada animal merece el mejor cuidado, y estamos aquí para brindárselo.
            </p>
            <p style={{ color: 'white', marginBottom: '10px' }}>
                ¿Por Qué Elegirnos?

                - Expertos en Cuidado Animal: Nuestro equipo de veterinarios altamente calificados y amantes de los animales está listo para ofrecer atención de calidad a tus peludos, escamosos o emplumados.

                - Servicios Integrales: Desde consultas de rutina hasta tratamientos especializados, ofrecemos una amplia gama de servicios para asegurarnos de que tu mascota esté sana y feliz.

                - Ambiente Acogedor: En nuestra clínica, cada mascota es tratada como parte de nuestra familia. Nos esforzamos por crear un ambiente cómodo y seguro para que tanto tú como tu mascota se sientan a gusto.
                ¡Agenda Tu Cita Hoy!
            </p>
            <p style={{ color: 'white', marginBottom: '10px' }}>¡Tu viaje hacia la salud y felicidad de tu mascota comienza aquí!</p>
        </div>
    )}
</div>


        {pagina === 'quienes-somos' && (
          <div>
            <h2>Quiénes Somos</h2>
            <p>Somos una empresa dedicada a la gestión de citas para mascotas.</p>
          </div>
        )}

        {pagina === 'reservas' && (
          <div className="row">
            <HacerCita agregarCita={agregarCita} />
            <ListaCitas citas={citas} eliminarCita={eliminarCita} />
          </div>
        )}

        {pagina === 'contacto' && (
          <div>
            <h2>Contacto</h2>
            <form>
              <label>Nombre</label>
              <input type="text" name="nombre" className="u-full-width" required />

              <label>Email</label>
              <input type="email" name="email" className="u-full-width" required />

              <label>Mensaje</label>
              <textarea name="mensaje" className="u-full-width" required></textarea>

              <button type="submit" className="u-full-width button-primary">
                Enviar
              </button>
            </form>
          </div>
        )}
      </div>

  );
}

export default App;
