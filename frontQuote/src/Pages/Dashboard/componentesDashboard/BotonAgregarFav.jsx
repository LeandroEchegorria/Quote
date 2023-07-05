import React from 'react';
import Swal from 'sweetalert2';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function BotonAgregarFav() {

  const agregarFav = () => {
    Swal.fire({
      color: 'white',
      iconColor: 'white',
      background: '#7D18F7',
      confirmButtonColor: 'black',
      confirmButtonText: 'Volver',
      title: '¡Listo!',
      text: 'La frase se agregó a tus favoritos.',
      icon: 'success'
    }
      
    )
  }


  return (
    <button type='button' className='btn btn-secondary' data-bs-container='body' data-bs-trigger='hover focus' data-bs-placement='bottom' data-bs-content='Agregar a Favoritos' onClick={agregarFav}><FavoriteRoundedIcon /></button>
  )
}
