import { Link } from "react-router-dom"
import logoQuotify from '../assets/quotify-logo.svg'
import Historial from '../Pages/Dashboard/pagesDashboard/Historial'


const NavBar = () => {
  return (
      <header className='py-4 bg-background fixed-top shadow'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a href='/' className='d-flex align-items-center mb-lg-0 link-body-emphasis text-decoration-none'>
              <img src={logoQuotify} alt='Quotify Logo' height='25px'/>
            </a>

            <ul className='nav col-12 flex col-lg-auto me-lg-auto mb-2 mb-md-0'>
              <li><Link to='/' className='nav-link link-body-emphasis ms-9'>Como Funciona</Link></li>
              <li><Link to='/home-user/historial' element={<Historial/>} className='nav-link link-body-emphasis'>Testimonios</Link></li>
              <li><Link to='/home-user/historial' element={<Historial/>} className='nav-link link-body-emphasis'>Contactanos</Link></li>

      
            </ul>
            <button type='button' className='btn btn-secondary-btn btn-sm px-3 py-2 flex justify-end mx-2'><strong>Iniciar Sesión</strong></button>
            <button type='button' className='btn btn-primary btn-sm px-4 py-2 flex justify-end'><strong>Registrarse</strong></button>

          </div>
        </div>
      </header>


    
  )
}

export default NavBar






