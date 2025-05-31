import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarComparison.css';

const CarComparison = () => {
  const navigate = useNavigate();
  const [firstCar, setFirstCar] = useState('');
  const [secondCar, setSecondCar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comparison logic here
  };

  return (
    <div className="car-comparison-container">
      <nav className="navigation">
        <ul>
          <li onClick={() => navigate('/Home')}>New cars</li>
          <li onClick={() => navigate('/UsedCars')}>Used cars</li>
          <li className="active"><a href="#car-comparison">Car comparison</a></li>
           <li onClick={() => navigate('/Car-finance')}>Car finance</li>
        </ul>
      </nav>

      <main className="comparison-section">
        <h1>Choose two cars to compare:</h1>
        
        <form onSubmit={handleSubmit} className="comparison-form">
          <div className="cars-container">
            <div className="car-input-wrapper">
              <input
                type="text"
                placeholder="First car:"
                value={firstCar}
                onChange={(e) => setFirstCar(e.target.value)}
                className="car-input"
              />
            </div>

            <div className="vs-circle">
              <span>VS</span>
            </div>

            <div className="car-input-wrapper">
              <input
                type="text"
                placeholder="Second car:"
                value={secondCar}
                onChange={(e) => setSecondCar(e.target.value)}
                className="car-input"
              />
            </div>
          </div>

          <button type="submit" className="confirm-button">
            CONFIRM
          </button>
        </form>
      </main>
    </div>
  );
};

export default CarComparison;
