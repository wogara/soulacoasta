'use client';

import { useState } from 'react';
import ConnectModal from '../modals/connect-modal';
import MusicPlayer from '../music-player/music-player';

export default function ButtonGroup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-black border-b-2 border-white p-4 fixed bottom-0 left-0 w-full z-50">
        <div className="flex justify-between items-center">
          <button className="text-white hover:text-gray-400 p-2 border border-white h-12 w-24 flex items-center justify-center">
            Shop
          </button>
          <MusicPlayer />
          <button
            onClick={openModal}
            className="text-white hover:text-gray-400 p-2 border border-white h-12 w-24 flex items-center justify-center"
          >
            Connect
          </button>
        </div>
      </div>
      <ConnectModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
