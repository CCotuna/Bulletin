import React from 'react';
import '../components/css/news-banner.css'; // Import the CSS file for custom styles

const NewsBanner = () => {
  return (
    <div className="w-screen h-20 mt-20 bg-yellow-400 flex items-center overflow-hidden">
      <div className="news-slider">
        <span className="news-text">NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</span>
        <span className="news-text">NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS NEWS</span>
      </div>
    </div>
  );
};

export default NewsBanner;
