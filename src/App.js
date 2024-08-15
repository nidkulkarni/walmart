import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import ProfileForm from './components/ProfileForm';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';
import OTPVerification from './components/OTPVerification';
import Dashboard from './components/Dashboard';
import './styles/styles.css';
import LanguageSwitcher from './components/LanguageSwitcher';

const App = () => {
    return (
        <Router>
            <div>
                {/* Add LanguageSwitcher here to use it in the JSX */}
                <LanguageSwitcher />

                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    <Route path="/otp-verification" element={<OTPVerification />} />
                    <Route path="/form" element={<ProfilePage />} />
        <Route path="/profile" element={<ProfileForm />} /> 
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
