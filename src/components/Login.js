import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId === 'WALIND2024' && password === 'WALIND2024') {
      navigate('/dashboard');
    } else {
      alert('Invalid ID or Password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>{t('Login')}</h2>
      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder={t('Employee ID')}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={t('Password')}
        required
      />
      <button type="submit">{t('Login')}</button>
    </form>
  );
};

export default Login;
