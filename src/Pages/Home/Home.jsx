import NavBar from '../../Components/NavBar'
import foto1 from '../../assets/img Hero.png'
import foto2 from '../../assets/Group 8.png'
import ComoFunciona from '../../Components/ComoFunciona'
import FooterHome from '../../Components/FooterHome'
import Testimonios from '../../Components/Testimonios'
import Contactanos from '../../Components/Contactanos'

const Home = () => {
  return (
    <>
      <section className="container col-xxl-8 px-4 py-5">
        <NavBar/>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={foto1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Generá, compartí y descarga frases motivadoras</h1>
            <p className="lead">Encontrá la motivación que necesitás en nuestra colección de frases inspiradoras
            y mantené una actitud positiva ante cualquier situación</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary-btn btn-lg px-4 py-2 flex justify-end">Registrate</button>
              
            </div>
          </div>
          <img src={foto2} alt="foto2" className="d-block mx-lg-auto img-fluid"/>
        </div>
      </section>
      <section id='ComoFunciona' className="container col-xxl-8 px-4 py-5 mt-9">
        <ComoFunciona/>
      </section>
      <section id='Testimonios' className="container col-xxl-8 px-4 py-5 mt-9">
        <Testimonios/>
      </section>
      <section id='Contacto' className="container col-xxl-8 px-4 py-5 mt-9">
        <Contactanos/>
      </section>
      
     <FooterHome/> 
    </>
  )
}

export default Home
