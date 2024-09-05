import React, { useState } from 'react';
import './App.css';
import './index.css';
//import imagenConejo from './public/imagenConejo.png';
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

<nav className='nav'>
  <button className='botonnav'
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#ff7e5f';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = 'white';
  }}
  onClick={() => setPagina('home')}>
    Home
  </button>

  <button className='botonnav' 
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#ff7e5f';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = 'white';
  }}
  onClick={() => setPagina('quienes-somos')}>
    Quiénes Somos
  </button>

  <button className='botonnav'
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#ff7e5f';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = 'white';
  }}
  onClick={() => setPagina('reservas')}>
    Reservas
  </button>

  <button className='botonnav' 
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#ff7e5f';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = 'white';
  }}
  onClick={() => setPagina('contacto')}>
    Contacto
  </button>
</nav>


      
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px' }}>
    {pagina === 'home' && (
        <div>
            <h2 className='titulo'>¡Bienvenido a Veteriland!</h2>
            <h3 className='subtitulo-home'>
            ¡Nos encanta darte la bienvenida a Veteriland! Aquí, no solo encontrarás una clínica veterinaria, sino un equipo comprometido y apasionado por el bienestar de tus fieles compañeros. Cada día trabajamos con dedicación para asegurarnos de que cada mascota reciba la atención que merece, porque entendemos que son parte fundamental de tu familia. Desde chequeos rutinarios hasta tratamientos especializados, estamos preparados para ofrecer el mejor cuidado posible. En Veteriland, no solo tratamos a las mascotas, sino que las acompañamos en cada etapa de su vida para que puedan vivir felices y saludables.
            </h3>
            <p className='pregunta2-home'>¿Por Qué Elegirnos?</p>
           
            <div style={{ display: 'flex', flexDirection: 'row'}}>
            <p className='textos-home'>
                <span className='span-home'> - Expertos en Cuidado Animal:</span> Nuestro equipo de veterinarios altamente calificados y amantes de los animales está listo para ofrecer atención de calidad a tus peludos, escamosos o emplumados.
            </p>
            <p className='textos-home'>
            <span className='span-home'> - Servicios Integrales:</span> Desde consultas de rutina hasta tratamientos especializados, ofrecemos una amplia gama de servicios para asegurarnos de que tu mascota esté sana y feliz.
            </p>
            <p className='textos-home'>
              <span className='span-home'>- Ambiente Acogedor:</span>  En nuestra clínica, cada mascota es tratada como parte de nuestra familia. Nos esforzamos por crear un ambiente cómodo y seguro para que tanto tú como tu mascota se sientan a gusto.
                ¡Agenda Tu Cita Hoy!
            </p>
            </div>
            
            <p className='textofinal-home' >¡Tu viaje hacia la salud y felicidad de tu mascota comienza aquí!</p>
        </div>
    )}
</div>


        {pagina === 'quienes-somos' && (
          <div>
            <h2 className='titulo'>Quiénes Somos</h2>
            <p className='texto-quienessomos'>Somos una empresa líder en la gestión de citas para mascotas, dedicada a facilitar el cuidado y bienestar de tus compañeros peludos. Entendemos que las mascotas son parte esencial de tu familia, y por eso nos enfocamos en ofrecer una plataforma intuitiva y eficiente para gestionar todas sus necesidades de salud y cuidado. Nuestro equipo, compuesto por profesionales con experiencia en el ámbito veterinario y tecnológico, trabaja incansablemente para que puedas programar citas con facilidad, desde chequeos regulares hasta tratamientos especializados. Nos enorgullece ser una solución confiable que te permite conectar con los mejores veterinarios, asegurando que tu mascota reciba la atención adecuada en el momento justo. En cada paso, nos guiamos por la pasión y el compromiso de mejorar la calidad de vida de los animales y facilitar la vida de sus dueños. Ya sea que necesites una consulta de rutina, una intervención quirúrgica o simplemente un control preventivo, estamos aquí para hacerlo más simple, rápido y eficiente. ¡Tu mascota es nuestra prioridad!</p>
            <div>
              <p className='texto-quienessomos'>Nuestro mejor veterinario:</p>
              <img  src="/imagenConejo.png" alt="imagen del mejor veterinario"
               style={{width: '20%'}}/>
            </div>        
          </div>
        )}

        {pagina === 'reservas' && (
          <div className="row">
                  <Titulo />
            <HacerCita agregarCita={agregarCita} />
            <ListaCitas citas={citas} eliminarCita={eliminarCita} />
          </div>
        )}

        {pagina === 'contacto' && (
          <div>
            <h2 className='titulo'>Contacto</h2>
            <p className='texto-quienessomos'>En esta sección, puedes ponerte en contacto con nosotros completando el formulario a continuación. Solo es necesario proporcionar tu nombre, correo electrónico y mensaje, y nos aseguraremos de responder lo antes posible. ¡Estamos aquí para ayudarte!</p>
            <form className='form-contacto'>
              <label>Nombre *</label>
              <input type="text" name="nombre" className="u-full-width" required />

              <label>Email *</label>
              <input type="email" name="email" className="u-full-width" required />

              <label>Mensaje *</label>
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
