import { Link } from "react-router-dom"
import logoQuotify from '../assets/quotify-logo.svg'
import Historial from '../Pages/Dashboard/Historial'
import Home from "../Pages/Home/Home"



const NavBar = () => {
  return (
      <header className='py-3 bg-background fixed-top shadow'>
        <div className='container'>
          <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
            <a href='/' className='d-flex align-items-center mb-lg-0 link-body-emphasis text-decoration-none'>
              <img src={logoQuotify} alt='Quotify Logo' height='25px'/>
            </a>

            <ul className='nav col-12 flex col-lg-auto me-lg-auto mb-2 mb-md-0'>
              <li><a href='#ComoFunciona' className='nav-link link-body-emphasis ms-9'>Como Funciona</a></li>
              <li><a href='/#Testimonios'  className='nav-link link-body-emphasis'>Testimonios</a></li>
              <li><a href='/#Contacto'  className='nav-link link-body-emphasis'>Contactenos</a></li>

      
            </ul>
            <Link to='/login'><button type='button' className='btn btn-secondary-btn btn-sm px-3 py-2 flex justify-end mx-2'>
              <strong>Iniciar Sesión</strong></button>
            </Link>
            <Link to='/register'><button type='button' className='btn btn-primary btn-sm px-4 py-2 flex justify-end'><strong>Registrarse</strong></button>
            </Link>
            

          </div>
        </div>
      </header>


    
  )
}

export default NavBar






