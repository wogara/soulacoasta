'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
import { fetchData } from '@/lib/sanity';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [tracks, setTracks] = useState([]);
  const audioRef = useRef(null);
  //const tracks = ['/audio/SOULACOASTA.mp3','/audio/futera_riddim_I.mp3','/audio/stick_it_XII.mp3'];
  //
  useEffect(() => {
    async function fetchTracks() {
      const query = '*[_type == "song"]{title, "url": file.asset->url}';
      const fetchedTracks = await fetchData(query);
      setTracks(fetchedTracks);
    }
    fetchTracks();
  }, []);

  useEffect(() => {
    if (tracks.length > 0) {
      const audio = new Audio(tracks[currentTrackIndex].url);
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
    }
  }, [currentTrackIndex, tracks]);

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
        <FontAwesomeIcon icon={faStepBackward} />
      </button>
      <button
        onClick={togglePlayPause}
        className="text-white hover:text-gray-400 p-2 border border-white rounded-full h-12 w-12 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button
        className="text-white hover:text-gray-400 p-2"
        onClick={handleNextTrack}
      >
        <FontAwesomeIcon icon={faStepForward} />
      </button>
    </div>
  );
}
