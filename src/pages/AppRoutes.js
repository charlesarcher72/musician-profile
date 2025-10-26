import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from '../pages/HomePage/HomePage';
import MusicPage from '../pages/MusicPage/MusicPage';
import TourPage from '../pages/TourPage/TourPage';
import GalleryPage from '../pages/GalleryPage/GalleryPage';
import MerchPage from '../pages/MerchPage/MerchPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutes = ({ artistData, audioPlayer }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage artistData={artistData} audioPlayer={audioPlayer} />} />
        <Route path="/music" element={<MusicPage artistData={artistData} audioPlayer={audioPlayer} />} />
        
        {artistData.tourDates && artistData.tourDates.length > 0 && (
          <Route path="/tour" element={<TourPage tourDates={artistData.tourDates} bookingEmail={artistData.artist.bookingEmail} />} />
        )}
        
        {artistData.gallery && artistData.gallery.length > 0 && (
          <Route path="/gallery" element={<GalleryPage gallery={artistData.gallery} />} />
        )}
        
        {artistData.merchandise && artistData.merchandise.length > 0 && (
          <Route path="/merch" element={<MerchPage merchandise={artistData.merchandise} />} />
        )}
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;