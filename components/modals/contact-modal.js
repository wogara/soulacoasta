'use client';

import { useEffect, useRef } from 'react';

export default function ContactModal({ isOpen, onClose }) {
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
        className="border border-white bg-black p-8 rounded shadow-lg"
      >
        <h2 className="text-2xl mb-4">Contact Me</h2>
        <p className="mb-4">E-mail: sample@gmail.com</p>
        <p className="mb-4">Twitter: sample-twitter</p>
        <p className="mb-4">Instagram: sample-instagram</p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          X
        </button>
      </div>
    </div>
  );
}
