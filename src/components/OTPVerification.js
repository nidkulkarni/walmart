import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!isNaN(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < 3 && value) {
                document.getElementById(`otp-${index + 2}`).focus();
            }
        }
    };

    const handleSubmit = () => {
        const enteredOtp = otp.join('');
        const storedOtp = localStorage.getItem('otp'); // Retrieve OTP from localStorage

        if (enteredOtp === storedOtp) {
            setError('');
            navigate('/profile'); // Redirect to Profile Form
        } else {
            setError('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>OTP Verification</h2>
            <div className="otp-input">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleChange(e, index)}
                        id={`otp-${index + 1}`}
                    />
                ))}
            </div>
            {error && <div className="error-message">{error}</div>}
            <button onClick={handleSubmit}>Verify OTP</button>
        </div>
    );
};

export default OTPVerification;
