import TeamData from "../utils/TeamData"
import TeamCard from "./TeamCard"


export default function Team() {

  const equipo = TeamData.map( (equipo) => {
    return (
        <TeamCard key={equipo.id}
            name={equipo.name} 
            title={equipo.title} 
            image={equipo.image}
        />
    )
  })
  return (
    <section className='bg-background d-flex flex-column justify-content-center align-items-center'>
      <div className='container row row-cols-md-3' >
        {equipo}
      </div>
    </section>
  )
}
