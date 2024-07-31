import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons from react-icons

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<FaEyeSlash />);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      alert('Login Successful');
      navigate('/');
      setMessage('Login Successful!!');
    } catch (error) {
      setMessage('Login failed, please provide correct credentials');
      console.error('Login failed', { error });
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<FaEye />);
      setType('text');
    } else {
      setIcon(<FaEyeSlash />);
      setType('password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <div className='alert alert-info'>{message}</div>}
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-lg-4'>
            <div className='card p-4 shadow'>
              <div className='mb-3'>
                <label htmlFor='username' className='form-label'>Username:</label>
                <input
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='username'
                  id='username'
                  className='form-control'
                />
              </div>
              
              <div className='mb-3 position-relative'>
                <label htmlFor='password' className='form-label'>Password:</label>
                <input
                  type={type}
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                  placeholder='password'
                  id='password'
                  className='form-control'
                />
                <span className='position-absolute top-50 end-0 translate-middle-y pe-2' onClick={handleToggle}>
                  {icon}
                </span>
              </div>
              
              <button type='submit' className='btn btn-primary w-100'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
