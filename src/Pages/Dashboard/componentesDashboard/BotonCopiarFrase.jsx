import React from 'react';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import Swal from 'sweetalert2';

//paso como parametros las copias del autor y la frase (usando useRef en el Quote) para poder utilizarlo en la función de 'copiarFrase' en el portapapeles. En esta función, guardo la info, le doy formato en otra variable y agrego los popUps
export default function BotonCopiarFrase({ quoteRef, authorRef }) {
  const copiarFrase = () => {
    const fraseCopiada = quoteRef.current?.textContent;
    const autorCopiado = authorRef.current?.textContent;

    const fraseCompartir = `Frase: ${fraseCopiada}\nAutor: ${autorCopiado}`;

    if (fraseCompartir) {
      navigator.clipboard.writeText(fraseCompartir)
        .then(() => {
          Swal.fire({
            background: '#7D18F7',
            color: 'white',
            title: '¡Frase copiada en el portapapeles!',
            text: '',
            icon: 'success',
            iconColor: 'white',
            confirmButtonColor: 'black',
            confirmButtonText: 'Volver'
          });
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error
          });
        });
    }
  };

  return (
    <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Compartir' onClick={copiarFrase}>
      <ContentCopyRoundedIcon />
    </button>
  );
}

