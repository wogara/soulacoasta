'use client';

import { useState } from 'react';
import ConnectModal from '../modals/connect-modal';
import MusicPlayer from '../music-player/music-player';
import ShopModal from '../modals/shop-modal';

export default function ButtonGroup() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);

  const openConnectModal = () => {
    setIsConnectModalOpen(true);
  };

  const closeConnectModal = () => {
    setIsConnectModalOpen(false);
  };
  const openShopModal = () => {
    setIsShopModalOpen(true);
  };

  const closeShopModal = () => {
    setIsShopModalOpen(false);
  };

  return (
    <div>
      <div className="bg-black border-t-2 border-white p-4 fixed bottom-0 left-0 w-full z-50">
        <div className="flex justify-between items-center">
          <button
            onClick={openShopModal}
            className="text-white hover:text-gray-400 p-2 border border-white h-12 w-32 text-lg flex items-center justify-center"
          >
            Shop
          </button>
          <MusicPlayer />
          <button
            onClick={openConnectModal}
            className="text-white hover:text-gray-400 p-2 border border-white h-12 w-32 text-lg flex items-center justify-center"
          >
            Connect
          </button>
        </div>
      </div>
      <ConnectModal isOpen={isConnectModalOpen} onClose={closeConnectModal} />
      <ShopModal isOpen={isShopModalOpen} onClose={closeShopModal} />
    </div>
  );
}
