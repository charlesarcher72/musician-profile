import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faPause, 
  faVolumeMute, 
  faVolumeUp,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import './MiniPlayer.css';

const MiniPlayer = ({ audioPlayer }) => {
  const { 
    isPlaying, 
    progress, 
    togglePlay, 
    toggleMute, 
    isMuted, 
    volume, 
    handleVolumeChange,
    trackInfo,
    currentTrack,
    stopPlayback
  } = audioPlayer;
  
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    if (currentTrack) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentTrack]);
  
  const handleClose = () => {
    if (stopPlayback) {
      stopPlayback();
    }
  };

  return (
    <div className={`mini-player ${isActive ? 'active' : ''}`}>
      <div className="mini-player-content">
        <button className="play-button" onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        
        <div className="track-info">
          <div className="track-title-container">
            <p className="track-title">
              {trackInfo.title || 'Unknown Track'}
              {trackInfo.album && <span className="track-album"> • {trackInfo.album}</span>}
            </p>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <div className="volume-controls">
          <button onClick={toggleMute} className="volume-button">
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(e.target.value)}
            className="volume-slider"
          />
        </div>
        
        <button 
          className="close-button" 
          onClick={handleClose}
          aria-label="Close player"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default MiniPlayer;