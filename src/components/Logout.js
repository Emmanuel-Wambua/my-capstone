// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Logout = () => {
  const navigate = useNavigate();

  const submitLogout = (e) => {
    e.preventDefault();
    axios.post("/api/logout", { withCredentials: true })
      .then(() => {
        navigate('/');
      });
  };

  return (
    <form onSubmit={submitLogout}>
      <Button type="submit" variant="light">Log out</Button>
    </form>
  );
};

export default Logout;
