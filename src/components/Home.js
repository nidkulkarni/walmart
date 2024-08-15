import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageClick = (occupation) => {
    navigate('/register', { state: { occupation } });
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{t('Welcome to Walmart India')}</h1>
        <p>{t('Connecting Farmers, Artisans, and Partners Directly to Walmart')}</p>
      </header>

      <section className="photo-gallery">
        <div className="gallery-container">
          <div className="gallery-item" onClick={() => handleImageClick('Farmer')}>
            <img src="https://media.istockphoto.com/id/1226029166/photo/fruts-vegetables-at-market-india.jpg?s=612x612&w=0&k=20&c=2zOAPF32PTDonIvCUA1PyBhXQ1X0UcKDmQKtknz_sAA=" alt={t('Farmer')} />
            <p>{t('Farmer')}</p>
          </div>
          <div className="gallery-item" onClick={() => handleImageClick('Artisan')}>
            <img src="https://i3.wp.com/www.thetalentedindian.com/wp-content/uploads/2023/03/Globalisation-and-art.jpeg" alt={t('Artisan')} />
            <p>{t('Artisan')}</p>
          </div>
          <div className="gallery-item" onClick={() => handleImageClick('Farmer')}>
            <img src="https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2021/08/farmers-market-produce-0812211.jpg" alt={t('Farmer')} />
            <p>{t('Farmer')}</p>
          </div>
          <div className="gallery-item" onClick={() => handleImageClick('Banker')}>
            <img src="https://m.economictimes.com/thumb/msid-99905852,width-1600,height-900,resizemode-4,imgsize-98080/bank.jpg" alt={t('Banker')} />
            <p>{t('Banker')}</p>
          </div>
          {/* Add more gallery items as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
