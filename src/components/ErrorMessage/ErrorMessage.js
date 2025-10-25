import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message = "An error occurred" }) => {
  return (
    <div className="error-message">
      <h2>Error Loading Data</h2>
      <p>{message}</p>
      <button onClick={() => window.location.reload()} className="retry-button">
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;