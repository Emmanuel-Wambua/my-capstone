// src/components/SimpleCard.js

import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

function SimpleCard({ image, name, status, ability }) {
  const cardStyle = {
    width: '100%', // Let the card take full width of the column
    marginBottom: '1rem',
  };

  const imgStyle = {
    height: '300px',
    objectFit: 'cover',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={image} className="card-img-top" alt={name} style={imgStyle} />
      <div className="card-body">
        <strong><p className="card-title">{name}</p></strong>
        <h4 className="card-subtitle mb-2 text-muted">{status}</h4>
        <p className="card-text">{ability}</p>
      </div>
    </div>
  );
}

SimpleCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  ability: PropTypes.string.isRequired,
};

export default SimpleCard;
