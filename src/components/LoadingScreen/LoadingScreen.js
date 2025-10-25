import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-animation">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
      <p>Loading artist profile...</p>
    </div>
  );
};

export default LoadingScreen;