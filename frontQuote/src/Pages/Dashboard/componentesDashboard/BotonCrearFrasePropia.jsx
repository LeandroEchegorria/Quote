import React from 'react'
import Swal from 'sweetalert2';

//paso como parametros la función de setear la frase propia, y los valores de los estados de 
export default function BotonCrearFrasePropia({ setFrasePropia, mostrarFrase, frasePropia }) {

  // popup para ingresar la frase deseada
  const generarFrasePropia = async () => {
    const { value: { text, author } } = await Swal.fire({
      background: '#7D18F7',
      title: 'Tu frase',
      text:
        'Acá no hay frases hechas ni impuestas, creá la que te cope más! ¡Dale, animate a crear tu propia inspiración y compartila con la banda!',
      color: 'white',
      confirmButtonColor: 'black',
      confirmButtonText: 'Crear frase',
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: 'Volver',
      cancelButtonColor: 'transparent',
      focusCancel: false,
      html: `
      <input id='swal-input1' class='swal2-input' placeholder='Tu frase' value='${frasePropia?.text || ''}'>
      <input id='swal-input2' class='swal2-input' placeholder='¿Sos el autor?' value='${frasePropia?.author || ''}'>
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
    }
  };

  return (
    <button type='button' className='btn btn-primary btn-lg px-3 py-2 gap-5 fw-bold' onClick={generarFrasePropia}>Generar Frase</button>
  )
}