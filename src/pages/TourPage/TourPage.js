import React, { useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TourPage.css';

const TourPage = ({ tourDates = [], bookingEmail }) => {
  return (
    <div className="page tour-page">
      <h1>Tour Dates</h1>
      <div className="tour-dates-container">
        <AnimatePresence mode="wait">
          {tourDates.length > 0 ? (
            <motion.div 
              className="tour-dates-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key="tour-dates"
            >
              {tourDates.map((show) => (
                <div key={show.id} className="tour-date-card">
                  <div className="tour-date">{show.date}</div>
                  <div className="tour-details">
                    <h3>{show.venue}</h3>
                    <p>{show.location}</p>
                  </div>
                  <div className="tour-action">
                    <a href={show.ticketLink} target="_blank" rel="noopener noreferrer" className="ticket-button">
                      Get Tickets
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="no-tour-dates" key="no-tour-dates">
              <p>There are no upcoming tour dates at this time.</p>
              <p>Please check back soon for new announcements!</p>
            </div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="tour-contact">
        <h2>Booking Inquiries</h2>
        <p>For booking inquiries, please contact: <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a></p>
      </div>
    </div>
  );
};

export default TourPage;