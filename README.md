# My Music Artist Profile App

This is a React-based web application designed to showcase an artist's profile, including their bio, social media links, and album content. The app fetches data from a JSON file and presents it in a user-friendly interface, allowing users to navigate through different content sections seamlessly.

## Features

- Artist profile section with a profile picture, name, and bio.
- Social media links with Font Awesome icons.
- Album section to navigate through different albums.
- Responsive design to ensure a great experience on various devices.
- Dynamic content loading from a JSON file.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For managing navigation within the app.
- **Font Awesome**: For social media icons.
- **CSS**: For styling the application.

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
    "profilePic": "url_to_profile_picture"
  },
  "socialLinks": [
    { "url": "https://spotify.com", "icon": "faSpotify" },
    { "url": "https://apple.com", "icon": "faApple" },
    { "url": "https://deezer.com", "icon": "faDeezer" },
    { "url": "https://instagram.com", "icon": "faInstagram" },
    { "url": "https://facebook.com", "icon": "faFacebook" },
    { "url": "https://youtube.com", "icon": "faYoutube" }
  ],
  "content": [
    {
      "imgSrc": "url_to_album_art",
      "description": "Description of the album.",
      "links": [
        { "url": "link_to_streaming_service", "icon": "faSpotify" },
        { "url": "link_to_another_service", "icon": "faApple" }
      ]
    }
  ]
}
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to create an issue or submit a pull request.