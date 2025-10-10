import React, { useState } from 'react';

const ReadMeSection = ({ onBack }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleEnvelopeClick = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="expanded-content">
      <div className="content-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Read Me</h2>
      </div>
      <div className="content-body">
        <div className="envelope-container">
          <div className="envelope" onClick={handleEnvelopeClick}>
            <div className="envelope-flap"></div>
            <div className="envelope-body"></div>
            <div className="wax-seal">
              <div className="seal-design">💖</div>
            </div>
          </div>
          <button className="collect-btn">COLLECT</button>
          <div className="made-with-love">(طظ فيك يا سمسم)</div>
        </div>
        
        {/* Message Overlay */}
        {showMessage && (
          <div className="envelope-message">
            <div className="message-content">
              <h3>💖 Love Letter 💖</h3>
              <p>I hope you reach 22222 smsmty, and that we are together, your place in my heart is great, I can't find words to describe.🩷</p>
              <p>I hope that your presence will last a blessing in my life, and that I wake up every day to check on you, and I don't know how to sleep unless you are at home, and I prefer to be delirious with you all day and worry about my son who was out.</p>
              <p>You are the best who forced me to respect him and talk to you.</p>
              <p>I hope a beautiful memory remains in your mind, and that you always think of me gently, and I always think of you gently.🩷</p>
              <button className="close-message-btn" onClick={handleCloseMessage}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadMeSection;
