import Tour from './Tour'

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Tours
