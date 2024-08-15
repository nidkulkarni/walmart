import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RegistrationForm = () => {
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.occupation) {
      setOccupation(location.state.occupation);
    }
  }, [location]);

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
    localStorage.setItem('occupation', occupation);

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
      <select
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
      >
        <option value="">Select Occupation</option>
        <option value="Farmer">Farmer</option>
        <option value="Banker">Banker</option>
        <option value="Artisan">Artisan</option>
        <option value="Others">Others</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
