import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Reviews from './pages/Reviews';
import Locations from './pages/Locations';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Main wrapper for semantic structure */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
