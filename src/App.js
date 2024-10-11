import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faApple, faDeezer, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Added faSpinner
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentList, setContentList] = useState([]);
  const [artist, setArtist] = useState({});
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetch('/content.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setContentList(data.content);
        setArtist(data.artist);
        setSocialLinks(data.socialLinks);
      })
      .catch((error) => console.error('Error fetching JSON:', error));
  }, []);

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
  };

  const prevContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentList.length) % contentList.length);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faSpotify':
        return faSpotify;
      case 'faApple':
        return faApple;
      case 'faDeezer':
        return faDeezer;
      case 'faInstagram':
        return faInstagram;
      case 'faFacebook':
        return faFacebook;
      case 'faYoutube':
        return faYoutube;
      default:
        return null;
    }
  };

  if (contentList.length === 0) {
    return (
      <div className="loading-container">
        <FontAwesomeIcon icon={faSpinner} className="loading-icon" spin />
      </div>
    );
  }

  const currentContent = contentList[currentIndex];

  return (
    <Router>
      <div className="container">
        <section className="profile-section">
          <img src={artist.profilePic} alt="Profile" className="profile-pic" />
          <h1>{artist.name}</h1>
          <p>{artist.bio}</p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <FontAwesomeIcon icon={getIcon(link.icon)} className="social-icon" />
              </a>
            ))}
          </div>
        </section>

        <section className="album-section">
          <div className="content-section">
            <button onClick={prevContent} className="button">❮</button>
            <div className="content">
              <img src={currentContent.imgSrc} alt="Album Art" className="album-art" />
              <p>{currentContent.description}</p>
              <div className="icon-container">
                {currentContent.links && currentContent.links.length > 0 ? (
                  currentContent.links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FontAwesomeIcon icon={getIcon(link.icon)} className="icon" />
                    </a>
                  ))
                ) : (
                  <>
                    <div className="icon-link disabled">
                      <FontAwesomeIcon icon={faSpotify} className="icon" />
                    </div>
                    <div className="icon-link disabled">
                      <FontAwesomeIcon icon={faApple} className="icon" />
                    </div>
                  </>
                )}
              </div>
            </div>
            <button onClick={nextContent} className="button">❯</button>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
