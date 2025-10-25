import { 
  faSpotify, faApple, faDeezer, faInstagram, 
  faFacebook, faYoutube, faTiktok, faTwitter, faPatreon 
} from '@fortawesome/free-brands-svg-icons';

// Helper function to get FontAwesome icon
export const getIcon = (iconName) => {
  switch (iconName) {
    case 'faSpotify': return faSpotify;
    case 'faApple': return faApple;
    case 'faDeezer': return faDeezer;
    case 'faInstagram': return faInstagram;
    case 'faFacebook': return faFacebook;
    case 'faYoutube': return faYoutube;
    case 'faTiktok': return faTiktok;
    case 'faTwitter': return faTwitter;
    case 'faPatreon': return faPatreon;
    default: return null;
  }
};