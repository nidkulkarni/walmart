import React from 'react';

const OtpInput = ({ value, onChange }) => {
  const handleChange = (e, index) => {
    const val = e.target.value;
    if (/^\d{1}$/.test(val) || val === '') {
      const otpArray = value.split('');
      otpArray[index] = val;
      onChange(otpArray.join(''));
    }
  };

  return (
    <div>
      {Array(4).fill().map((_, index) => (
        <input 
          key={index} 
          type="text" 
          maxLength="1" 
          value={value[index] || ''} 
          onChange={(e) => handleChange(e, index)}
          style={{ width: '40px', margin: '0 5px' }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
