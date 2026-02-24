import React from 'react';
import { Link } from 'react-router-dom';
import downloadImage from '../download (6).jfif';
// import styles from './Home.module.scss';

function Home() {
  return (
    <div
      style={{
        height: 'calc(100vh - 56px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Image + overlay wrapper */}
      <div
        style={{
          position: 'relative',
          width: '75%',
          height: '75vh',
        }}
      >
        {/* Background Image */}
        <img
          src={downloadImage}
          alt="Anime Gala"
          className="rounded"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            display: 'block',
          }}
        />

        {/* Text Overlay on top of image */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            background: 'rgba(0, 0, 0, 0.4)', // dark tint so text is readable
          }}
        >
          <h1 className="text-white text-center mb-3">Welcome to Anime Gala</h1>
          <p className="text-white text-center px-4">
            Explore your favorite anime characters from Attack on Titan, My Hero Academia, and Jujutsu Kaisen.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;