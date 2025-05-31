import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CarFinance.css';

const CarFinance = () => {
  const navigate = useNavigate();
  const [carVariant, setCarVariant] = useState('');
  const [tenure, setTenure] = useState('');
  const [downPayment, setDownPayment] = useState('');

  return (
    <div className="finance-container">
      <nav className="main-nav">
        <ul className="nav-tabs">
          <li onClick={() => navigate('/Home')}>New cars</li>
          <li>Used cars</li>
          <li>Car comparison</li>
          <li className="active">Car finance</li>
        </ul>
      </nav>

      <div className="finance-hero-section">
        <div className="finance-content">
          <h1>Find Best Car Financing Plans in Egypt</h1>
          <p>Flexible Financing for your dream Car</p>
        </div>

        <div className="calculator-card">
          <h2>Car loan calculator</h2>
          <div className="calculator-form">
            <div className="input-group">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                placeholder="Search by car variant"
                value={carVariant}
                onChange={(e) => setCarVariant(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="time-icon">⏱️</div>
              <input
                type="text"
                placeholder="Select Tenure"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="money-icon">💰</div>
              <input
                type="text"
                placeholder="Down payment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
              />
            </div>

            <button className="calculate-button">
              Calculate EMI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFinance;