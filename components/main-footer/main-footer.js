'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import ContactModal from '../modals/contact-modal';

export default function ButtonGroup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/sample-12s.mp3');
    audio.preload = 'auto';
    audioRef.current = audio;
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-black border-b-2 border-white p-4 fixed bottom-0 left-0 w-full z-50">
        <div className="flex justify-between">
          <button className="text-white hover:text-gray-400 p-2 border border-white">
            Shop
          </button>
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-gray-400 p-2 border border-white rounded-full h-12 w-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button
            onClick={openModal}
            className="text-white hover:text-gray-400 p-2 border border-white"
          >
            Contact
          </button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
