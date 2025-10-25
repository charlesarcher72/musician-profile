import React from 'react';
import { motion } from 'framer-motion';
import './TourPage.css';

const TourPage = ({ tourDates = [], bookingEmail }) => {
  return (
    <motion.div
      className="page tour-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Tour Dates</h1>
      <div className="tour-dates-container">
        {tourDates.length > 0 ? (
          <div className="tour-dates-list">
            {tourDates.map((show) => (
              <motion.div 
                key={show.id} 
                className="tour-date-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: show.id * 0.1 }}
              >
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
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="no-tour-dates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>There are no upcoming tour dates at this time.</p>
            <p>Please check back soon for new announcements!</p>
          </motion.div>
        )}
      </div>
      
      <motion.div 
        className="tour-contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2>Booking Inquiries</h2>
        <p>For booking inquiries, please contact: <a href={`mailto:${bookingEmail}`}>{bookingEmail}</a></p>
      </motion.div>
    </motion.div>
  );
};

export default TourPage;