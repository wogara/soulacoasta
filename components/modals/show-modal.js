import { useState, useEffect, useRef } from 'react';
import { urlFor } from '@/lib/sanityImage';
import Image from 'next/image';

export default function ShowModal({ isOpen, onClose, show }) {
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
        className="relative border border-white bg-black p-8 rounded shadow-lg flex justify-center items-center w-auto max-w-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-400 text-2xl md:text-base"
        >
          X
        </button>
        <Image src={urlFor(show.image)} loading='eager' width={500} height={500} alt="Flyer" className="w-1/2 h-auto rounded" />
        <div className="ml-8">
          <p className="text-white mb-2">
            <strong>Date:</strong> {new Date(show.date).toLocaleDateString()}
          </p>
          <p className="text-white mb-2">
            <strong>City:</strong> {show.city}
          </p>
          <p className="text-white mb-2">
            <strong>Venue:</strong> {show.venue}
          </p>
          <p className="text-white mb-2">
            <strong>Address:</strong> {show.address}
          </p>
          {show.link !== 'N/A' && (
            <p className="text-white mb-2">
              <strong>Link:</strong>{' '}
              <a
                href={show.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400"
              >
                Here
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
