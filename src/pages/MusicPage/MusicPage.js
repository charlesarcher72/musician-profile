import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { getIcon } from '../../utils/iconUtils';

import './MusicPage.css';

const MusicPage = ({ artistData, audioPlayer }) => {
  const { playTrack } = audioPlayer;
  
  return (
    <motion.div
      className="page music-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Music</h1>
      <div className="releases-grid">
        {artistData.content.map((content, contentIndex) => (
          <div key={content.id || contentIndex} className="release-full-card">
            <div className="release-artwork">
              <img src={content.imgSrc} alt={content.title || `Release ${contentIndex + 1}`} />
              <div className="artwork-overlay">
                {content.tracks && content.tracks.length > 0 && content.tracks[0].audioUrl && (
                  <button 
                    className="play-album-button"
                    onClick={() => playTrack(content.tracks[0].audioUrl, content.tracks[0].title, content.title)}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </button>
                )}
              </div>
            </div>
            
            <div className="release-details">
              <h2>{content.title || `Release ${contentIndex + 1}`}</h2>
              {content.type && content.year && (
                <p className="release-type">{content.type} • {content.year}</p>
              )}
              <p className="release-description">{content.description}</p>
              
              {content.tracks && content.tracks.length > 0 && (
                <div className="track-list">
                  <h3>Tracks</h3>
                  {content.tracks.map((track, trackIndex) => (
                    <div key={trackIndex} className="track-item">
                      {track.audioUrl ? (
                        <button
                          className="track-play-button"
                          onClick={() => playTrack(track.audioUrl, track.title, content.title)}
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </button>
                      ) : (
                        <span className="track-play-button disabled">
                          <FontAwesomeIcon icon={faPlay} />
                        </span>
                      )}
                      <div className="track-info">
                        <span className="track-title">{track.title}</span>
                        {track.duration && (
                          <span className="track-duration">{track.duration}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {content.links && content.links.length > 0 && (
                <div className="streaming-links">
                  <div className="streaming-header">
                    <h3>Listen On</h3>
                    <div className="streaming-buttons">
                      {content.links.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="streaming-button">
                          <FontAwesomeIcon icon={getIcon(link.icon)} />
                          <span>{link.icon.replace('fa', '')}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MusicPage;