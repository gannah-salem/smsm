import React from 'react';

const BirthdayCard = ({ activeSection, onSectionClick }) => {
  const isShrunk = activeSection !== null;

  return (
    <div className={`birthday-card ${isShrunk ? 'shrunk' : ''}`}>
      {/* Header */}
      <div className="card-header">
        <h1 className="card-title">Happy birthday smsm 🩷</h1>
      </div>
      
      {/* Main Content */}
      <div className="card-content">
        <h2 className="greeting">hi, twenty-two</h2>
        <p className="message">Wishing you a day filled with love, joy and all the things that make you happiest 💖</p>
        
        {/* Video */}
        <div className="card-photo">
          <video autoPlay muted loop className="main-video">
            <source src="/birthday-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="card-navigation">
        <button 
          className="nav-btn profile-btn" 
          onClick={() => onSectionClick('profile')}
        >
          <i className="fas fa-user"></i>
          <span>Profile</span>
        </button>
        <button 
          className="nav-btn twenty-btn" 
          onClick={() => onSectionClick('twentyTwo')}
        >
          <i className="fas fa-film"></i>
          <span>Twenty Two</span>
        </button>
        <button 
          className="nav-btn read-btn" 
          onClick={() => onSectionClick('readMe')}
        >
          <i className="fas fa-envelope"></i>
          <span>Read Me</span>
        </button>
      </div>
    </div>
  );
};

export default BirthdayCard;
