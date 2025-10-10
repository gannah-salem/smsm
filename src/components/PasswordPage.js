import React, { useState } from 'react';

const PasswordPage = ({ onPasswordSuccess }) => {
  const [enteredPassword, setEnteredPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const CORRECT_PASSWORD = '2732025';

  const handleNumberClick = (number) => {
    if (enteredPassword.length < 10) {
      setEnteredPassword(enteredPassword + number);
      setShowError(false);
    }
  };

  const handleClear = () => {
    setEnteredPassword('');
    setShowError(false);
  };

  const handleEnter = () => {
    if (enteredPassword === CORRECT_PASSWORD) {
      onPasswordSuccess();
    } else {
      setShowError(true);
      setEnteredPassword('');
      setTimeout(() => setShowError(false), 3000);
    }
  };

  return (
    <div className="password-page">
      <div className="password-container">
        {/* Left Side - Photo */}
        <div className="photo-section">
          <div className="photo-frame">
            <div className="photo-border">
              <img src="/couple-photo.jpg" alt="Birthday Photo" className="couple-photo" />
            </div>
          </div>
        </div>
        
        {/* Right Side - Password Input */}
        <div className="password-section">
          <div className="password-box">
            <h2 className="password-title">Enter Passcode</h2>
            <div className="password-display">
              <input 
                type="password" 
                value={'*'.repeat(enteredPassword.length)}
                placeholder="Enter Passcode" 
                readOnly 
                className="password-input"
              />
            </div>
            
            {/* Keypad */}
            <div className="keypad">
              {[1,2,3,4,5,6,7,8,9].map(num => (
                <button 
                  key={num}
                  className="key" 
                  onClick={() => handleNumberClick(num.toString())}
                >
                  {num}
                </button>
              ))}
              <button className="key clear" onClick={handleClear}>Clear</button>
              <button className="key" onClick={() => handleNumberClick('0')}>0</button>
              <button className="key enter" onClick={handleEnter}>Enter</button>
            </div>
            
            {/* Error Message */}
            {showError && (
              <div className="error-message">
                Wrong Password! ❌
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordPage;
