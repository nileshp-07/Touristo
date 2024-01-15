import React from 'react'
import Cards from './Cards';

function Tours({tourData , removeTour}) {
    return (
        <div className="cardsContainer">
            {
                tourData.map((tour) => {
                    return <Cards key={tour.id} {...tour}  removeTour = {removeTour}/>
                })
            }
        </div>
    )
}

export default Tours;


