import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GalleryPage.css';

const GalleryPage = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <motion.div
      className="page gallery-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <motion.div 
            key={item.id} 
            className="gallery-grid-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.id * 0.02 }}
            onClick={() => setSelectedImage(item)}
          >
            <img src={item.imgSrc} alt="" />
          </motion.div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.imgSrc} alt="" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryPage;