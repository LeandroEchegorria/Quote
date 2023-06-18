import React from 'react';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import Swal from 'sweetalert2';

export default function BotonCompartirFrase() {

  const compartirFrase = () => {
    Swal.fire({
      title: '¡Compartí tu frase en un instante!',
      color: 'white',
      iconColor: 'white',
      background: '#7D18F7',
      text: "Seleccioná tu red social preferida y dejá que tus amigos y seguidores disfruten de tu inspiración y motivación.",
      icon: 'false',
      showCancelButton: false,
      confirmButtonColor: 'black',
      focusConfirm: false,
      cancelButtonColor: 'transparent',
      focusCancel: false,
      confirmButtonText: 'Instagram',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Compartido con éxito!',
          color: 'white',
          iconColor: 'white',
          background: '#7D18F7',
          text: "¡Gracias por formar parte de Quotify!",
          icon: 'success',
          confirmButtonColor: 'black',
          confirmButtonText: 'Volver',
        })
      }
    })
  }

  return (
    <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Compartir' onClick={compartirFrase}><ShareRoundedIcon /></button>
  )
}
