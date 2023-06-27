import logoQuotify from '../assets/quotify-logo-white.svg'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

//import Desktop from '../Components/Desktop'


export default function FooterHome() {
  return (
    <div className="container bg-primary rounded-top-5 text-white text-center">
      <footer className="pt-4">
        <div className="row">
          <div className="col-sm-5 ">
            <a href='/'>
              <img className='p-0 m-4' src={logoQuotify} height="30" alt='Quotify, un lugar donde la inspiración nace'/>
            </a>
          </div>
          <a href='/' className="col-6 col-sm-2 mb-3 nav-link">
            <h5  >Integrantes</h5>{/*Integrantes está en el archivo Desktop.jsx */}
          </a>
          <a href='/' className="col-6 col-sm-2 mb-3 nav-link">
            <h5  >Como Funciona</h5>
          </a>
          <a href='/' className="col-6 col-sm-2 mb-5 nav-link">
          <h5>Testimonios</h5>
          </a>
          <a href='/' className="col-6 col-sm-2 mb-3 nav-link">
            <h5>Contactanos</h5>
          </a>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className='nav-item'><a href='https://facebook.com/' target='blank' className='nav-link px-2 text-white'><FacebookIcon /></a></li>
            <li className='nav-item'><a href='https://twitter.com/' target='blank' className='nav-link px-2 text-white'><TwitterIcon /></a></li>
            <li className='nav-item'><a href='https://instagram.com/' target='blank' className='nav-link px-2 text-white'><InstagramIcon /></a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
