import React from 'react'
import logoQuotify from '../../../assets/quotify-logo.svg'
import { Link } from 'react-router-dom'
import Dashboard from '../pagesDashboard/Dashboard'
import Historial from '../pagesDashboard/Historial'

export default function NavbarDashboard() {
  return (
    <header className='py-4 bg-background fixed-top shadow'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a href='/' className='d-flex align-items-center mb-lg-0 link-body-emphasis text-decoration-none'>
            <img src={logoQuotify} alt='Quotify Logo' height='25px'/>
          </a>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li><Link to='/home-user/dashboard' element={<Dashboard/>} className='nav-link link-body-emphasis ms-9'>Dashboard</Link></li>
            <li><Link to='/home-user/historial' element={<Historial/>} className='nav-link link-body-emphasis'>Historial</Link></li>
          </ul>

          <div className='dropdown-center text-end'>
            <a href='#' className='d-block link-body-emphasis text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
              <img src='https://github.com/mdo.png' alt='mdo' width='40' height='40' className='rounded-3 border-primary-2' />
            </a>
            <ul className='dropdown-menu w-25 rounded-3 bg-primary text-small p-3 text-center'>
              <li><p className='text-white m-0'><strong>Bonnie Bonassi</strong></p></li>
              <li><p className='text-white'>@Quotyfier</p></li>
              <li><hr className='dropdown-divider bg-white' /></li>
              <li><a className='nav-link link-hover-white text-white my-3' href='#'>Editar perfil</a></li>
              <li><button type="button" class="btn btn-special-btn px-auto py-2">Cerrar Sesión</button></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
