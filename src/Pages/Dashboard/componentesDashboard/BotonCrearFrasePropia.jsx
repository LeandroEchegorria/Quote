import React from 'react'
import Swal from 'sweetalert2';

export default function BotonCrearFrasePropia({ setFrasePropia, mostrarFrase, frasePropia }) {
  // popup para ingresar la frase deseada
  const generarFrasePropia = async () => {
    const { value: { text, author } } = await Swal.fire({
      title: 'Tu frase',
      color: 'white',
      confirmButtonColor: 'black',
      focusConfirm: false,
      background: '#7D18F7',
      text:
        'Acá no hay frases hechas ni impuestas, creá la que te cope más! ¡Dale, animate a crear tu propia inspiración y compartila con la banda!',
      inputPlaceholder: 'Ingresa tu frase acá...',
      showCancelButton: true,
      cancelButtonColor: 'transparent',
      focusCancel: false,
      html: `
      <input id="swal-input1" class="swal2-input" placeholder="Ingresa el texto de la frase..." value="${frasePropia?.text || ''}">
      <input id="swal-input2" class="swal2-input" placeholder="Ingresa el autor de la frase..." value="${frasePropia?.author || ''}">
    `,
      preConfirm: () => {
        return {
          text: document.getElementById('swal-input1').value,
          author: document.getElementById('swal-input2').value
        };
      }
    });

    if (text && author) {
      const frasePropiaData = { text, author };
      setFrasePropia(frasePropiaData);
      mostrarFrase();

      // Guardar la frase propia en el almacenamiento local
      // localStorage.setItem('frasePropia', JSON.stringify(frasePropiaData));
    }
  };


  /*
  // estados para: renderizar el componente al clickear el botón "frase del dia"
  const [mostrarComponente, setMostrarComponente] = useState(false);

  //función para renderizar el componente cuando se hace click en el botón
  const obtenerFraseDelDia = () => {
    setMostrarComponente(true);
  }; */

  return (
    <button type='button' className='btn btn-primary btn-lg px-3 py-2 gap-5' onClick={generarFrasePropia}><strong>Generar Frase</strong></button>
  )
}
