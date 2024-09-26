import { useState } from 'react';

function CarDetails() {
    return (
        <div className="car-details">
            <img src={image.car} alt={car.model} style={{width: '100%', height: 'auto'}} />
            <h2>{car.style}</h2>
            <p>{car.description}</p>
            <h3>Price: ${car.price}</h3>
            {/* Add content here */}
        </div>
    );
}
export default CarDetails;