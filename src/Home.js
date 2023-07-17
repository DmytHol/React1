import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to My Awesome App</h1>
      <p className="home-description">Explore and Enjoy</p>
      <div className="home-buttons">
        <Link to="/counter" className="home-button home-button-primary">
          Banana Counter
        </Link>
        <Link to="/weather" className="home-button home-button-secondary">
          Weather App
        </Link>
      </div>
    </div>
  );
};

export default Home;