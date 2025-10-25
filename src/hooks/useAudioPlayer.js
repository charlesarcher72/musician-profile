import { useState, useEffect, useRef } from 'react';

export const useAudioPlayer = () => {
  const audioRef = useRef(null);
  
  const getAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    return audioRef.current;
  };
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackInfo, setTrackInfo] = useState({
    title: '',
    album: ''
  });
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const audio = getAudio();
    
    const updateProgress = () => {
      if (!audio.duration) return;
      
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(currentProgress) ? 0 : currentProgress);
    };
    
    const handleTrackEnd = () => {
      console.log("Track ended");
      resetPlayer();
    };
    
    const handleError = (e) => {
      console.error("Audio error:", e);
      resetPlayer();
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleTrackEnd);
    audio.addEventListener('error', handleError);
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleTrackEnd);
      audio.removeEventListener('error', handleError);
    };
  }, []);
  
  const resetPlayer = () => {
    const audio = getAudio();
    
    audio.pause();
    audio.currentTime = 0;
    
    setIsPlaying(false);
    setCurrentTrack(null);
    setProgress(0);
    setTrackInfo({ title: '', album: '' });
    
    audio.src = '';
    audio.load();
  };
  
  const togglePlay = () => {
    const audio = getAudio();
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else if (currentTrack) {
      audio.play()
        .catch(e => {
          console.error("Play error:", e);
          setIsPlaying(false);
        });
      setIsPlaying(true);
    }
  };
  
  const toggleMute = () => {
    const audio = getAudio();
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  
  const handleVolumeChange = (newVolume) => {
    const audio = getAudio();
    const volumeValue = parseFloat(newVolume);
    
    setVolume(volumeValue);
    audio.volume = volumeValue;
    
    if (isMuted && volumeValue > 0) {
      audio.muted = false;
      setIsMuted(false);
    }
  };
  
  const playTrack = (trackUrl, title, album = '') => {
    if (!trackUrl) {
      console.error("No track URL provided");
      return;
    }
    
    const audio = getAudio();
    
    if (currentTrack === trackUrl && isPlaying) {
      return;
    }
    
    console.log(`Playing track: ${trackUrl}`);
    
    audio.pause();
    audio.currentTime = 0;
    
    audio.src = trackUrl;
    setCurrentTrack(trackUrl);
    setTrackInfo({
      title: title || 'Unknown Track',
      album: album || ''
    });
    
    audio.load();
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
        console.log("Playback started successfully");
      }).catch(error => {
        console.error("Playback failed:", error);
        setIsPlaying(false);
      });
    } else {
      setIsPlaying(true);
    }
  };
  
  const stopPlayback = () => {
    console.log("Stopping playback");
    resetPlayer();
  };
  
  useEffect(() => {
    const audio = getAudio();
    audio.volume = volume;
  }, [volume]);
  
  return {
    audioRef,
    isPlaying,
    currentTrack,
    trackInfo,
    volume,
    isMuted,
    progress,
    togglePlay,
    toggleMute,
    handleVolumeChange,
    playTrack,
    stopPlayback
  };
};

export default useAudioPlayer;