import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getIcon } from '../../utils/iconUtils';

import './Footer.css';

const Footer = ({ artistData }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            {artistData.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
              >
                <FontAwesomeIcon icon={getIcon(link.icon)} />
              </a>
            ))}
          </div>
        </div>
        <div className="footer-nav">
          <h3>Navigate</h3>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/music" onClick={scrollToTop}>Music</Link></li>
            <li><Link to="/tour" onClick={scrollToTop}>Tour</Link></li>
            {artistData.gallery && artistData.gallery.length > 0 && (
              <li><Link to="/gallery" onClick={scrollToTop}>Gallery</Link></li>
            )}
            {artistData.merchandise && artistData.merchandise.length > 0 && (
              <li><Link to="/merch" onClick={scrollToTop}>Merch</Link></li>
            )}
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {artistData.artist.name}</p>
      </div>
    </footer>
  );
};

export default Footer;