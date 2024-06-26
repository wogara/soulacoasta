'use client';

import { useState, useEffect, useRef } from 'react';

export default function ShopModal({ isOpen, onClose }) {
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
        className="relative border border-white bg-black p-8 rounded shadow-lg w-60 h-60 flex justify-center items-center"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400"
        >
          X
        </button>
        <h1 className="text-2xl text-center">Coming Soon</h1>
      </div>
    </div>
  );
}
