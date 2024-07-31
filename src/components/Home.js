import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Anime Gala</h1>
      <p>Explore your favorite anime characters from Attack on Titan, My Hero Academia, and Jujutsu Kaisen.</p>
      <Link to="/login">
        <button className="btn btn-primary">Login</button>
      </Link>
      <Link to="/register">
        <button className="btn btn-secondary">Register</button>
      </Link>
    </div>
  );
}

export default Home;
