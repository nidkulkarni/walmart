import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="language-select">
            <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
