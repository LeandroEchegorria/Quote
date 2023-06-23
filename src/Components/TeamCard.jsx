

const TeamCard = (props) => {
  return (
    <div className='col' key={props.id}>
      <div className='card border-0 my-5' >
        <div className='card-header bg-quote-background border-0 d-flex justify-content-between align-items-center'>
          <img src={props.image} alt="foto-team" width={120}/>
          <h6 className='m-9'><strong>{props.name}</strong></h6>
        </div>

        <div className='card-body my-2'>
          <blockquote className='blockquote mb-0'>
            <p className='text-subtitle '>
              {props.title}
            </p>
          </blockquote>
        </div>

      </div>
    </div>
  )
}

export default TeamCard
