import React from 'react';
import { motion } from 'framer-motion';
import './MerchPage.css';

const MerchPage = ({ merchandise }) => {
  return (
    <motion.div
      className="page merch-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Merchandise</h1>
      <div className="merch-grid">
        {merchandise.map((item) => (
          <motion.div 
            key={item.id} 
            className="merch-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.id * 0.1 }}
          >
            <div className="merch-image">
              <img src={item.imgSrc} alt={item.name} />
            </div>
            <div className="merch-details">
              <h3>{item.name}</h3>
              <p className="merch-price">{item.price}</p>
              <a href={item.link} className="buy-button">Buy Now</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MerchPage;