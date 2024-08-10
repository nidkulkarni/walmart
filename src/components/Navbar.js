import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <Link to="/">{t('home')}</Link>
      <Link to="/profile">{t('profile')}</Link>
      <Link to="/login">{t('login')}</Link>
      <Link to="/dashboard">{t('dashboard')}</Link>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
      </div>
    </nav>
  );
};

export default Navbar;
