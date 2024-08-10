import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Validate name (only alphabets)
    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError('Name must contain only alphabets');
      return;
    }

    // Validate mobile number (exactly 10 digits)
    if (!/^\d{10}$/.test(mobile)) {
      setError('Mobile number must be exactly 10 digits');
      return;
    }

    // Check if the mobile number already exists in the dashboard's saved data
    const profileData = JSON.parse(localStorage.getItem('profileData'));
    if (profileData && profileData.mobile === mobile) {
      setError('This mobile number is already registered in the dashboard');
      return;
    }

    // Clear error if validation passes
    setError('');

    // Simulate sending OTP
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem('otp', otp); // Store OTP
    localStorage.setItem('name', name);
    localStorage.setItem('mobile', mobile);
    alert(`OTP sent: ${otp}`); // For demo purposes only
    navigate('/otp-verification');
  };

  return (
    <div className="container">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={handleRegister}>Send OTP</button>
    </div>
  );
};

export default RegistrationForm;
