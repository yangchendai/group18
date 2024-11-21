import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2>歡迎來到「最近紅什麼」！</h2>
      <p>近期的事物，歡迎分享給大家!</p>
      <img 
        src="https://example.com/food-trend.jpg" 
        alt="任何事物"
        className="home-image"
      />
    </div>
  );
};

export default Home;
