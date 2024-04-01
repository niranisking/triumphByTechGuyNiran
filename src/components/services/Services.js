import React from 'react';
import { Link } from 'react-router-dom';
import PetroleumDelivery from './PetroleumDelivery';
import CarDealership from './CarDealership';

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div>
        <h2>Petroleum Delivery</h2>
        <PetroleumDelivery />
        <Link to="/services/petroleum-delivery">Learn More</Link>
      </div>
      <div>
        <h2>Car Dealership</h2>
        <CarDealership />
        <Link to="/services/car-dealership">Learn More</Link>
      </div>
    </div>
  );
}

export default Services;

