import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; 

const carData = {
  1: { id: 1, name: 'Toyota Camry', price: 24000, image: '2019_toyota_camry.jpg', description: 'Reliable and fuel-efficient sedan.', specs: '2.5L 4-cylinder engine, Automatic transmission' },
  2: { id: 2, name: 'Honda Accord', price: 26000, image: 'honda-accord.jpg', description: 'Comfortable and spacious sedan.', specs: '1.5L Turbo engine, Automatic transmission' },
  3: { id: 3, name: 'Tesla Model S', price: 80000, image: 'Tesla-Model-S.png', description: 'Luxury electric sedan with cutting-edge technology.', specs: 'Dual Motor All-Wheel Drive, Autopilot' },
};

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const car = carData[id];

  if (!car) {
    return <p>Car not found</p>;
  }

  return (
    <div className="product-details">
      <img src={`/images/${car.image}`} alt={car.name} className="car-detail-image" />
      <h1>{car.name}</h1>
      <p>${car.price.toLocaleString()}</p>
      <p>{car.description}</p>
      <p><strong>Specifications:</strong> {car.specs}</p>
      <button onClick={() => addToCart(car)} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;


