import React, { useState } from 'react';
import PasswordPage from './components/PasswordPage';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('password');
  const [activeSection, setActiveSection] = useState(null);

  const handlePasswordSuccess = () => {
    setCurrentPage('main');
  };

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleBackToMain = () => {
    setActiveSection(null);
  };

  return (
    <div className="App">
      {currentPage === 'password' && (
        <PasswordPage onPasswordSuccess={handlePasswordSuccess} />
      )}
      
      {currentPage === 'main' && (
        <MainPage 
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          onBackToMain={handleBackToMain}
        />
      )}
    </div>
  );
}

export default App;
