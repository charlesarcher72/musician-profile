# My Music Artist Profile App

This is a React-based web application designed to showcase an artist's profile, including their bio, social media links, music, tour dates, gallery, and merchandise. The app fetches data from a JSON file and presents it in a user-friendly interface, allowing users to navigate through different content sections seamlessly.

## Features

- **Artist profile section** with a profile picture, name, and bio
- **Social media links** with Font Awesome icons
- **Music player** with album/track navigation and streaming links
- **Tour dates listing** with venue information and ticket links (conditionally rendered)
- **Photo gallery** with lightbox functionality (conditionally rendered)
- **Merchandise store** with product listings (conditionally rendered)
- **Dark/Light theme toggle** for personalized viewing
- **Responsive design** for all devices
- **Animated page transitions** using Framer Motion
- **Dynamic content loading** from a JSON file
- **Conditional navigation** - menu items only appear when content is available

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React Router**: For managing navigation within the app
- **Framer Motion**: For smooth page transitions and animations
- **Font Awesome**: For icons throughout the interface
- **Context API**: For theme management
- **React Hooks**: For state management and custom functionality

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
   
2. **Navigate into the project directory**:
   ```bash
   cd your-repo-name
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

## JSON Data Structure

The app expects a JSON file (`content.json`) in the public directory with the following structure:

```json
{
  "artist": {
    "name": "Artist Name",
    "bio": "A brief bio of the artist.",
    "profilePic": "url_to_profile_picture",
    "bookingEmail": "booking@example.com",
    "featuredSong": {
      "url": "/path/to/featured-song.mp3"
    }
  },
  "socialLinks": [
    { "url": "https://spotify.com", "icon": "faSpotify" },
    { "url": "https://instagram.com", "icon": "faInstagram" },
    { "url": "https://facebook.com", "icon": "faFacebook" },
    { "url": "https://youtube.com", "icon": "faYoutube" }
  ],
  "content": [
    {
      "id": 1,
      "title": "Album Title",
      "type": "Album",
      "year": "2023",
      "imgSrc": "url_to_album_art",
      "description": "Description of the album.",
      "tracks": [
        {
          "title": "Track 1",
          "duration": "3:45",
          "audioUrl": "/path/to/track.mp3"
        }
      ],
      "links": [
        { "url": "link_to_streaming_service", "icon": "faSpotify" },
        { "url": "link_to_another_service", "icon": "faApple" }
      ]
    }
  ],
  "tourDates": [
    {
      "id": 1,
      "date": "May 15, 2024",
      "venue": "Venue Name",
      "location": "City, Country",
      "ticketLink": "https://tickets.example.com"
    }
  ],
  "gallery": [
    {
      "id": 1,
      "imgSrc": "/path/to/gallery-image.jpg"
    }
  ],
  "merchandise": [
    {
      "id": 1,
      "name": "T-Shirt",
      "price": "$25",
      "imgSrc": "/path/to/merch-image.jpg",
      "link": "https://store.example.com/product"
    }
  ]
}
```

### Optional Sections

The following sections are **optional** and will only be displayed if data is provided:

- **Tour Dates**: The Tour navigation link and page will only appear if the `tourDates` array contains one or more tour dates
- **Gallery**: The Gallery navigation link and page will only appear if the `gallery` array contains one or more images
- **Merchandise**: The Merch navigation link and page will only appear if the `merchandise` array contains one or more products

You can safely omit these arrays from your JSON file, or leave them as empty arrays `[]`, and the application will adapt accordingly.

## Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── LoadingScreen/
│   ├── MiniPlayer/
│   └── ErrorMessage/
├── context/
│   └── ThemeContext.js
├── hooks/
│   └── useAudioPlayer.js
├── pages/
│   ├── HomePage/
│   ├── MusicPage/
│   ├── TourPage/
│   ├── GalleryPage/
│   ├── MerchPage/
│   └── NotFoundPage/
├── utils/
│   └── iconUtils.js
├── App.js
└── AppRoutes.js
```

## Key Features Explained

### Dynamic Content Loading
The site fetches all artist data from a single JSON file:
```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/content.json');
      const data = await response.json();
      setArtistData(data);
    } catch (error) {
      setError(error.message);
    }
  };
  fetchData();
}, []);
```

### Conditional Rendering
Navigation links and routes are only rendered when content is available:
```javascript
{artistData.tourDates && artistData.tourDates.length > 0 && (
  <li><Link to="/tour">Tour</Link></li>
)}
```

This ensures users only see navigation options for content that actually exists, creating a cleaner and more professional user experience.

### Theme Switching
Toggle between dark and light themes with a built-in theme switcher using React Context:
```javascript
const { theme, toggleTheme } = useTheme();
```

### Animated Page Transitions
Smooth transitions between pages using Framer Motion:
```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to create an issue or submit a pull request.