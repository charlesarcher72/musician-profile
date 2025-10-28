import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCaretLeft, faCaretRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { getIcon } from '../../utils/iconUtils';

import './HomePage.css';

const HomePage = ({ artistData, audioPlayer }) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [displayedGalleryItems, setDisplayedGalleryItems] = useState([]);
  const carouselRef = useRef(null);
  
  const getGalleryItems = (startIndex, count = 4) => {
    if (!artistData.gallery || artistData.gallery.length === 0) return [];
    
    if (artistData.gallery.length <= 4) return artistData.gallery;
    
    const items = [];
    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % artistData.gallery.length;
      items.push(artistData.gallery[index]);
    }
    return items;
  };
  
  useEffect(() => {
    if (artistData.gallery && artistData.gallery.length > 0) {
      setDisplayedGalleryItems(getGalleryItems(0));
    }
  }, [artistData.gallery]);
  
  useEffect(() => {
    if (!artistData.gallery || artistData.gallery.length <= 4) return;
    
    const rotateGallery = () => {
      const currentFirstIndex = artistData.gallery.findIndex(
        item => item.id === displayedGalleryItems[0]?.id
      );
      
      const nextStartIndex = (currentFirstIndex + 1) % artistData.gallery.length;
      setDisplayedGalleryItems(getGalleryItems(nextStartIndex));
    };
    
    const galleryInterval = setInterval(rotateGallery, 5000);
    return () => clearInterval(galleryInterval);
  }, [artistData.gallery, displayedGalleryItems]);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const nextContent = () => {
    setCurrentContentIndex((prevIndex) => 
      (prevIndex + 1) % artistData.content.length
    );
  };

  const prevContent = () => {
    setCurrentContentIndex((prevIndex) => 
      (prevIndex - 1 + artistData.content.length) % artistData.content.length
    );
  };
  
  const handleIndicatorClick = (index) => {
    setCurrentContentIndex(index);
  };
  
  const currentContent = artistData.content[currentContentIndex];
  
  return (
    <motion.div
      className="page home-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src={artistData.artist.profilePic} alt={artistData.artist.name} className="profile-image" />
          </div>
          <div className="hero-text">
            <h1>{artistData.artist.name}</h1>
            <p className="artist-bio">{artistData.artist.bio}</p>
            <div className="hero-buttons">
              <Link 
                to="/music" 
                className="primary-button"
                onClick={scrollToTop}
              >
                <FontAwesomeIcon icon={faMusic} />
                <span>Listen Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="music-carousel-section">
        <h2>Music</h2>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevContent}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          
          <div 
            className="release-carousel"
            ref={carouselRef}
          >
            <div className="release-card">
              <div className="release-image">
                <img src={currentContent.imgSrc} alt={currentContent.title || "Album Art"} />
                <div className="release-overlay">
                  {currentContent.links && currentContent.links.length > 0 && (
                    <a 
                      href={currentContent.links[0].url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="play-album-button"
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </a>
                  )}
                </div>
              </div>
              <div className="release-info">
                <h3>{currentContent.title || `Release ${currentContentIndex + 1}`}</h3>
                {currentContent.type && currentContent.year && (
                  <p className="release-type">{currentContent.type} • {currentContent.year}</p>
                )}
                <p className="release-description">{currentContent.description}</p>
                <div className="streaming-links">
                  {currentContent.links && currentContent.links.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="streaming-link"
                    >
                      <FontAwesomeIcon icon={getIcon(link.icon)} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <button className="carousel-button next" onClick={nextContent}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        <div className="carousel-indicators">
          {artistData.content.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === currentContentIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </section>
      
      {artistData.tourDates && artistData.tourDates.length > 0 && (
        <section className="upcoming-shows-section">
          <h2>Upcoming Shows</h2>
          <div className="tour-dates-list">
            {artistData.tourDates.slice(0, 3).map((show) => (
              <div key={show.id} className="tour-date-card">
                <div className="tour-date">{show.date}</div>
                <div className="tour-details">
                  <h3>{show.venue}</h3>
                  <p>{show.location}</p>
                </div>
                <div className="tour-action">
                  <a 
                    href={show.ticketLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ticket-button"
                    onClick={scrollToTop}
                  >
                    Get Tickets
                  </a>
                </div>
              </div>
            ))}
          </div>
          {artistData.tourDates.length > 3 && (
            <div className="section-action">
              <Link 
                to="/tour" 
                className="view-all-button"
                onClick={scrollToTop}
              >
                View All Tour Dates
              </Link>
            </div>
          )}
        </section>
      )}
      
      {artistData.gallery && artistData.gallery.length > 0 && (
        <section className="gallery-preview-section">
          <h2>Gallery</h2>
          <div className="gallery-preview">
            {displayedGalleryItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="gallery-item"
              >
                <img src={item.imgSrc} alt="" />
              </div>
            ))}
          </div>
          {artistData.gallery.length > 4 && (
            <div className="section-action">
              <Link 
                to="/gallery" 
                className="view-all-button"
                onClick={scrollToTop}
              >
                View Full Gallery
              </Link>
            </div>
          )}
        </section>
      )}
    </motion.div>
  );
};

export default HomePage;