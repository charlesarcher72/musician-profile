import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '../../utils/iconUtils';

import './Footer.css';

const Footer = ({ artistData }) => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            {artistData.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-link"
              >
                <FontAwesomeIcon icon={getIcon(link.icon)} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {artistData.artist.name}</p>
      </div>
    </footer>
  );
};

export default Footer;