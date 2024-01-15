import React, { useState } from 'react'

function Cards({id, name, info , price , image ,removeTour} ) {

    const [readmore, setReadmore] = useState(true)

    function readmoreHandler(){
        setReadmore(!readmore);
    }


    let description = readmore ? `${info.substring(0, 200)}....` : info;
    return (
        <div className="card">

            <img className='image' src={image} alt="image" />

            <div className="tour-info">

                <div className="tour-details">
                    <h2 className="tour-price">{price}</h2>
                    <h2 className="tour-name">{name}</h2>
                </div>

                <div className="description">
                    {description}
                    <span className='readMore' onClick={readmoreHandler}>
                        {readmore ? "Read More" : "Show Less"}
                    </span>
                </div>
            </div>

            <button className='notInterestedBtn'  onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Cards;


