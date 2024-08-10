import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{t('Welcome to Walmart India')}</h1>
        <p>{t('Connecting Farmers, Artisans, and Partners Directly to Walmart')}</p>
      </header>

      

      <nav className="home-nav">
        <ul>
          <li>
            <Link to="/register">{t('Register Now')}</Link>
          </li>
          <li>
            <Link to="/login">{t('Employee Login')}</Link>
          </li>
        </ul>
      </nav>

      <section className="home-content">
        <h2>{t('Why Choose Walmart India?')}</h2>
        <p>{t('We provide a direct platform for suppliers to connect with Walmart, bypassing intermediaries and ensuring fair trade practices.')}</p>
      </section>

      <footer className="home-footer">
        <p>{t('© 2024 Walmart India. All Rights Reserved.')}</p>
      </footer>
    </div>
  );
};

export default Home;
