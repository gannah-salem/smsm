import React from 'react';

const ProfileSection = ({ onBack }) => {
  return (
    <div className="expanded-content">
      <div className="content-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>a little about you</h2>
      </div>
      <div className="content-body">
        <div className="profile-photo">
          <img src="/couple-photo.jpg" alt="Profile Photo" className="profile-img" />
        </div>
        <div className="profile-text">
          <p>My favorite man, the most beautiful coincidence that happened in my life entered me the most beautiful and sweetest heart in the world 🩷</p>
          <p>Every year and you are good, my love, and I hope you reach all the life and you are next to me, O Lord, and I see you always happy and good, and I know how to make you comfortable always by my side</p>
          <p>I love you so much ya smsm 🩷</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
