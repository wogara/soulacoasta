'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);
  const tracks = ['/sample-9s.mp3', '/sample-12s.mp3', '/sample-15s.mp3'];

  useEffect(() => {
    const audio = new Audio(tracks[currentTrackIndex]);
    audio.preload = 'auto';
    audioRef.current = audio;

    audio.onended = () => {
      handleNextTrack();
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [isPlaying, currentTrackIndex]);

  return (
    <div className="flex items-center space-x-4">
      <button
        className="text-white hover:text-gray-400 p-2"
        onClick={handlePreviousTrack}
      >
        <FontAwesomeIcon icon={faStepBackward} style={{ color: '#FED100' }} />
      </button>
      <button
        onClick={togglePlayPause}
        className="text-white hover:bg-black p-2 border border-white rounded-full h-12 w-12 flex items-center justify-center bg-customGreen"
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          style={{ color: '#FED100' }}
        />
      </button>
      <button
        className="text-white hover:text-gray-400 p-2"
        onClick={handleNextTrack}
      >
        <FontAwesomeIcon icon={faStepForward} style={{ color: '#FED100' }} />
      </button>
    </div>
  );
}
