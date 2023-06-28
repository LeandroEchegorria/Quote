import React from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Swal from 'sweetalert2';

export default function botonSacarFav() {

  const sacarFavoritos = () => {
    Swal.fire({
      title: '¿La vas a borrar?',
      color: 'white',
      iconColor: 'white',
      background: '#7D18F7',
      text: 'No hay problema, a veces también es necesario dejar ir para dar lugar a nuevas ideas.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      focusConfirm: false,
      cancelButtonColor: 'transparent',
      focusCancel: false,
      confirmButtonText: 'Sacar de favoritos'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '¡Borrado con éxito!',
          color: 'white',
          iconColor: 'white',
          background: '#7D18F7',
          text: '¡Gracias por formar parte de Quotify!',
          icon: 'success',
          confirmButtonColor: 'black',
          confirmButtonText: 'Volver'
        })
      }
    })
  }

  return (
    <button type='button' className='btn' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Sacar de Favoritos' onClick={sacarFavoritos}><FavoriteRoundedIcon /></button>
  )
}
