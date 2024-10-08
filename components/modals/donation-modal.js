'use client';

import { useState, useEffect, useRef } from 'react';
import QrCode from '../qr-code/QrCode';

export default function DonationModal({ isOpen, onClose }) {
  const [selectedTab, setSelectedTab] = useState('cashapp');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="relative border border-white bg-black p-8 rounded shadow-lg w-80 h-80 flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400"
        >
          X
        </button>
        <h1 className="text-2xl text-center mb-0">
          {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        </h1>
        <div className="flex justify-center items-center flex-1">
          <h2><a className="underline" href="https://cash.app/$marlonrlando">$marlonrlando</a></h2>
        </div>
        <div className="flex justify-center items-center flex-1">
          {selectedTab === 'venmo' && (
            <QrCode link={'https://venmo.com/username'} />
          )}
          {selectedTab === 'cashapp' && (
            <QrCode link={'https://cash.app/$marlonrlando'} />
          )}
          {selectedTab === 'paypal' && (
            <QrCode link={'https://paypal.me/username'} />
          )}
        </div>
      </div>
    </div>
  );
}
