import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MiniPlayer from '../components/MiniPlayer/MiniPlayer';
import AppRoutes from './AppRoutes';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [artistData, setArtistData] = useState(null);
  const [error, setError] = useState(null);
  const initialTrack = artistData?.artist?.featuredSong?.url || null;
  const audioPlayer = useAudioPlayer(initialTrack);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/content.json');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArtistData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching JSON:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error || !artistData) {
    return <ErrorMessage message={error || "Failed to load artist data"} />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Header artistData={artistData} />
          
          <main>
            <AppRoutes 
              artistData={artistData} 
              audioPlayer={audioPlayer}
            />
          </main>
          
          <Footer artistData={artistData} />
          
          <MiniPlayer 
            audioPlayer={audioPlayer}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;