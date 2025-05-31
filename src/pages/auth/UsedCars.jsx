import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const UsedCars = () => {
  const navigate = useNavigate();
  const [selectedBodyType, setSelectedBodyType] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMileage, setSelectedMileage] = useState('');

  const bodyTypes = [
    'Sedan',
    'Hatchback',
    'SUV (Sport Utility Vehicle)',
    'Crossover',
    'Coupe',
    'Convertible',
    'Station Wagon',
    'Minivan',
    'Pickup Truck',
    'Sports Car'
  ];

  const transmissionTypes = [
    'Automatic',
    'Manual'
  ];

  const yearOptions = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i);

  const mileageRanges = [
    'Under 10,000 km',
    '10,000 - 30,000 km',
    '30,000 - 60,000 km',
    '60,000 - 100,000 km',
    'Over 100,000 km'
  ];

  const handleBodyTypeChange = (e) => {
    setSelectedBodyType(e.target.value);
  };

  const handleTransmissionChange = (e) => {
    setSelectedTransmission(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMileageChange = (e) => {
    setSelectedMileage(e.target.value);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <nav className="main-nav">
        <div className="nav-content">
          <ul className="nav-tabs">
            <li onClick={() => navigate('/Home')}>New cars</li>
            <li className="active">Used cars</li>
            <li onClick={() => navigate('/CarComparison')}>Car comparison</li>         
             <li onClick={() => navigate('/Car-finance')}>Car finance</li>
          </ul>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="hero-section">
        <h1>Find your perfect used car</h1>
        
        <div className="search-filters">
          <div className="filter-group">
            <label>Price range:</label>
            <input type="text" placeholder="Enter price range" />
          </div>

          <div className="filter-group">
            <label>Year:</label>
            <div className="select-wrapper">
              <select 
                value={selectedYear}
                onChange={handleYearChange}
                className="body-type-select"
              >
                <option value="">Select year</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label>Mileage:</label>
            <div className="select-wrapper">
              <select 
                value={selectedMileage}
                onChange={handleMileageChange}
                className="body-type-select"
              >
                <option value="">Select mileage range</option>
                {mileageRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label>Body type:</label>
            <div className="select-wrapper">
              <select 
                value={selectedBodyType}
                onChange={handleBodyTypeChange}
                className="body-type-select"
              >
                <option value="">Select body type</option>
                {bodyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label>Search car by make:</label>
            <input type="text" placeholder="Enter car make" />
          </div>

          <div className="filter-group">
            <label>Transmission:</label>
            <div className="select-wrapper">
              <select 
                value={selectedTransmission}
                onChange={handleTransmissionChange}
                className="body-type-select"
              >
                <option value="">Select transmission</option>
                {transmissionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="search-button">
            Search Used Cars
          </button>
        </div>
      </div>

      <div className="brand-logos">
        <div className="logo-row">
          <img src="/logos/bmw.png" alt="BMW" className="brand-logo" />
          <img src="/logos/mercedes.png" alt="Mercedes" className="brand-logo" />
          <img src="/logos/volkswagen.png" alt="Volkswagen" className="brand-logo" />
          <img src="/logos/skoda.png" alt="Skoda" className="brand-logo" />
          <img src="/logos/volvo.png" alt="Volvo" className="brand-logo" />
          <img src="/logos/nissan.png" alt="Nissan" className="brand-logo" />
          <img src="/logos/tesla.png" alt="Tesla" className="brand-logo" />
        </div>
        
        <div className="logo-row">
          <img src="/logos/kia.png" alt="Kia" className="brand-logo" />
          <img src="/logos/ford.png" alt="Ford" className="brand-logo" />
          <img src="/logos/jeep.png" alt="Jeep" className="brand-logo" />
          <img src="/logos/opel.png" alt="Opel" className="brand-logo" />
          <img src="/logos/toyota.png" alt="Toyota" className="brand-logo" />
          <img src="/logos/land-rover.png" alt="Land Rover" className="brand-logo" />
          <img src="/logos/bentley.png" alt="Bentley" className="brand-logo" />
        </div>
      </div>
    </div>
  );
};

export default UsedCars;
