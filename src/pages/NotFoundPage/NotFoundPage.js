import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <motion.div
      className="page not-found-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-button">Go Home</Link>
    </motion.div>
  );
};

export default NotFoundPage;