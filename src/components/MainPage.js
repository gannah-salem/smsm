import React from 'react';
import BirthdayCard from './BirthdayCard';
import ProfileSection from './ProfileSection';
import TwentyTwoSection from './TwentyTwoSection';
import ReadMeSection from './ReadMeSection';

const MainPage = ({ activeSection, onSectionClick, onBackToMain }) => {
  return (
    <div className="main-page">
      {/* Background Videos */}
      <video className="background-video" autoPlay muted loop>
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
      <video className="text-background-video" autoPlay muted loop>
        <source src="/text-background-video.mp4" type="video/mp4" />
      </video>
      
      {/* Birthday Card */}
      <div className="birthday-card-container">
        <BirthdayCard 
          activeSection={activeSection}
          onSectionClick={onSectionClick}
        />
        
        {/* Profile Section */}
        {activeSection === 'profile' && (
          <ProfileSection onBack={onBackToMain} />
        )}
        
        {/* Twenty Two Section */}
        {activeSection === 'twentyTwo' && (
          <TwentyTwoSection onBack={onBackToMain} />
        )}
        
        {/* Read Me Section */}
        {activeSection === 'readMe' && (
          <ReadMeSection onBack={onBackToMain} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
