import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye and eye-slash icons

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(<FaEye />);

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
      setIcon(<FaEyeSlash />);
    } else {
      setType('password');
      setIcon(<FaEye />);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Display message if any */}
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
              
              <button type='submit' className='btn btn-primary w-100'>Register</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
