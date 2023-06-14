import React from 'react'
import logoQuotify from '../../assets/quotify-logo-white.svg'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function FooterDashboard() {
  return (
    <footer className='container rounded-top-5 d-flex flex-wrap justify-content-between align-items-center bg-primary fixed-bottom mb-0 py-5 px-5'>
      {/* texto derechos reservados */}
      <p className='col-md-4 mb-0 text-white fs-6'>© 2023 Grupo 8.</p>
      {/* logo quotify */}
      <a href='/' className='h-9'>
        <img src={logoQuotify} alt='Quotify, un lugar donde la inspiración nace' height='20px'/>
      </a>
      {/* iconos redes sociales */}
      <ul className='nav col-md-4 justify-content-end'>
        <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-white'><FacebookIcon /></a></li>
        <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-white'><TwitterIcon /></a></li>
        <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-white'><InstagramIcon /></a></li>
      </ul>
    </footer>
  )
}
