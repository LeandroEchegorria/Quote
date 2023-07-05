import React, { useState } from 'react';
import Quote from '../componentesDashboard/Quote';
import 'animate.css';
import BotonCrearFrasePropia from '../componentesDashboard/BotonCrearFrasePropia';
import BotonGenerarFraseDia from '../componentesDashboard/BotonGenerarFraseDia';

export default function Dashboard() {
  // defino los estados tanto del contenido como del renderizado
  const [frasePropia, setFrasePropia] = useState(null);
  const [mostrarFrasePropia, setMostrarFrasePropia] = useState(false);
  const [fraseApi, setFraseApi] = useState(null);
  const [mostrarFraseApi, setMostrarFraseApi] = useState(false);

  // con funciones defino qué muestro dependiendo el botón clickeado: la frase propia o la frase de la api
  const mostrarFrase = () => {
    setMostrarFrasePropia(true);
    setMostrarFraseApi(false);
  };

  const mostrarFraseDelDia = () => {
    setMostrarFraseApi(true);
    setMostrarFrasePropia(false);
  };

  return (
    <section className='min-vh-100 text-center bg-background d-flex flex-column justify-content-center align-items-center py-9'>
      <h1 className='display-5 fw-bold text-body-emphasis mb-3 animate__animated animate__swing animate__delay-1s'>¡Bienvenido, Quoty!</h1>
      <div className='col-lg-6 mx-auto'>
        <p className='lead'>Presioná el botón y comenzá tu trayecto hacia la motivación con nuestras frases, elegí tus favoritas, personalizalas y compartilas con amigos en tus redes sociales.</p>
        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center my-9'>
          {/* a los botones les paso las funciones de estado */}
          <BotonCrearFrasePropia setFrasePropia={setFrasePropia} mostrarFrase={mostrarFrase} />
          <BotonGenerarFraseDia setFraseApi={setFraseApi} mostrarFraseDelDia={mostrarFraseDelDia} />
        </div>
      </div>
      <div>
        {/* en un div pongo el contenido a renderizar */}
        {mostrarFrasePropia && frasePropia && <Quote frasePropia={frasePropia} />}
        {mostrarFraseApi && fraseApi && <Quote frasePropia={fraseApi} />}
      </div>
    </section>
  );
}




/*

CHECK Día 1: Maquetado sitio (configuración bootstrap, lectura de documentación y clases, creación de carpeta Dashboard (como una página) y dentro creación de componentes, páginas, enrutamientos entre paginas)

CHECK Día 2: instalación de sweetAlert2, implementación de popups para: eliminar frase de historial y compartir. Además se realizó la generación de funciones para renderizado eventual (el fin es renderizar un componente importado al momento de clickear en el botón de "frase del día").

CHECK Día 3: terminar todos los popups de cada boton (creación de componente por cada botón con su respectivo popup: botonAgregarFav, botonEliminarFav, botonEditarFrase, botonCompartir, botonCrearFrase).

CHECK Día 4: creación de un useState / useContext / useEffect para la frase ingresada por el usuario. 

CHECK Día 5: solicitud API (para generar "frase del día" en el componente QUOTE). 

día 6: agregar otras funcionalidades (borrar frase, compartir en redes, crear una imagen de la frase en formato story, posteo de instagram)

*/