import { useEffect } from 'react';
import Quote from './componentesDashboard/Quote';

export default function Dashboard() {

  //useEffect(() => {
    //fetch("http://localhost:5000/userData", {
      //method: "POST",
      //crossDomain: true,
      //headers: {
        //"Content-Type":"application/json",
        //Accept: "application/json",
        //"Access-Control-Allow-Origin": "*",
      //},
      //body: JSON.stringify({
        //token,
      //}),
    //})
    //.then((res) => res.json())
    //.then((data) => {
      //console.log(data, "userData");
    //});
  //}, []);

  return (
    <section className='min-vh-100 text-center bg-background d-flex flex-column justify-content-center align-items-center py-9'>
    <h1 className='display-5 fw-bold text-body-emphasis mb-3'>¡Bienvenido, Quoty!</h1>
    <div className='col-lg-6 mx-auto'>
      <p className='lead'>Presioná el botón y comenzá tu trayecto hacia la motivación con nuestras frases, elegí tus favoritas, personalizalas y compartilas con amigos en tus redes sociales.</p>
      <div className='d-grid gap-2 d-sm-flex justify-content-sm-center my-9'>
        <button type='button' className='btn btn-primary btn-lg px-3 py-2 gap-5'><strong>Generar Frase</strong></button>
        <button type='button' className='btn btn-secondary-btn btn-lg px-3 py-2'><strong>Frase del Día</strong></button>
      </div>
    </div>
    {/* cuando se haga la solicitud a la API o se cree una nueva frase, se muestra este componente */}
    <Quote></Quote>
  </section>
  )
}
