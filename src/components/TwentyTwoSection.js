import React from 'react';

const TwentyTwoSection = ({ onBack }) => {
  return (
    <div className="expanded-content">
      <div className="content-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <h2>Twenty Two</h2>
      </div>
      <div className="content-body">
        <div className="film-strips-container">
          {/* First Film Strip */}
          <div className="film-strip">
            <div className="film-frame">
              <img src="/photo1.jpg" alt="Photo 1" className="film-photo" />
            </div>
            <div className="film-frame">
              <img src="/photo2.jpg" alt="Photo 2" className="film-photo" />
            </div>
            <div className="film-frame">
              <img src="/photo3.jpg" alt="Photo 3" className="film-photo" />
            </div>
          </div>
          
          {/* Second Film Strip */}
          <div className="film-strip">
            <div className="film-frame">
              <img src="/photo4.jpg" alt="Photo 4" className="film-photo" />
            </div>
            <div className="film-frame">
              <img src="/photo5.jpg" alt="Photo 5" className="film-photo" />
            </div>
            <div className="film-frame">
              <img src="/photo6.jpg" alt="Photo 6" className="film-photo" />
            </div>
          </div>
          
          {/* Video Frame */}
          <div className="video-frame">
            <video controls className="main-video">
              <source src="/main-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <button className="collect-btn">COLLECT</button>
      </div>
    </div>
  );
};

export default TwentyTwoSection;
