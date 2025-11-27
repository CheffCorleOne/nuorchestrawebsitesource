// src/components/BackgroundMusic.tsx
import React, { useEffect, useRef, useState } from 'react';
import musicFile from '../assets/music.mp3';
import { Volume2, VolumeX } from 'lucide-react'; // можно любую иконку

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <div className="fixed bottom-7 left-7 z-50">
      <button
        onClick={toggleAudio}
        className="bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-lg transition"
        title={isPlaying ? "Turn off music" : "Play music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
      <audio ref={audioRef} src={musicFile} loop />
    </div>
  );
};

export default BackgroundMusic;
