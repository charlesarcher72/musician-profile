import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import { getIcon } from '../../utils/iconUtils';

import './Header.css';

const Header = ({ artistData }) => {
  const { theme, toggleTheme } = useTheme();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const mobileMenuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      setMenuHeight(mobileMenuRef.current.scrollHeight);
    }
  }, [showMobileMenu, artistData]);

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={scrollToTop}>{artistData.artist.name}</Link>
        </div>
        
        <nav className="desktop-nav">
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
        </nav>
        
        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </button>
          <button className="mobile-menu-toggle" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <div className={`hamburger ${showMobileMenu ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav ${showMobileMenu ? 'open' : ''}`}
        ref={mobileMenuRef} 
        style={{ maxHeight: showMobileMenu ? `${menuHeight}px` : '0' }}
      >
        <ul>
          <li><Link to="/" onClick={() => { setShowMobileMenu(false); scrollToTop(); }}>Home</Link></li>
          <li><Link to="/music" onClick={() => { setShowMobileMenu(false); scrollToTop(); }}>Music</Link></li>
          <li><Link to="/tour" onClick={() => { setShowMobileMenu(false); scrollToTop(); }}>Tour</Link></li>
          {artistData.gallery && artistData.gallery.length > 0 && (
            <li><Link to="/gallery" onClick={() => { setShowMobileMenu(false); scrollToTop(); }}>Gallery</Link></li>
          )}
          {artistData.merchandise && artistData.merchandise.length > 0 && (
            <li><Link to="/merch" onClick={() => { setShowMobileMenu(false); scrollToTop(); }}>Merch</Link></li>
          )}
        </ul>
        <div className="mobile-social-links">
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
    </header>
  );
};

export default Header;