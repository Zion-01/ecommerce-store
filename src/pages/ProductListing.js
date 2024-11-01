import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListing.css';

const cars = [
  { id: 1, name: 'Toyota Camry', price: '$24,000', image: '2019_toyota_camry.jpg' },
  { id: 2, name: 'Honda Accord', price: '$26,000', image: 'honda-accord.jpg' },
  { id: 3, name: 'Tesla Model S', price: '$80,000', image: 'Tesla-Model-S.png' },
];

function ProductListing() {
  return (
    <div className="product-listing">
      <h1>Available Cars</h1>
      <div className="car-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <img src={`/images/${car.image}`} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
            <p>{car.price}</p>
            <Link to={`/product/${car.id}`} className="details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
