'use client';

import { useState, useEffect, useRef } from 'react';

export default function ConnectModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
    // Optionally, you can send the email to your server or an API here
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="relative border border-white bg-black p-8 rounded shadow-lg max-w-md w-full"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-lg hover:text-gray-400"
        >
          X
        </button>
        <h2 className="text-2xl mb-4">Contact Me</h2>
        <p className="mb-0">Bookings</p>
        <p className="mb-4">E-mail: sample@gmail.com</p>

        <p className="mb-0">Socials</p>
        <p className="mb-0">Instagram: sample-instagram</p>
        <p className="mb-0">Tiktok: sample-tiktok</p>
        <p className="mb-4">Twitter: sample-twitter</p>

        <p className="mb-0">Music</p>
        <p className="mb-0">Soundcloud: sample-soundcloud</p>
        <p className="mb-0">Bandcamp: sample-bandcamp</p>
        <p className="mb-0">Spotify: sample-spotify</p>
        <p className="mb-0">Apple Music: sample-apple-music</p>
        <p className="mb-0">Youtube: sample-youtube</p>
        <hr className="border-t border-gray-600 my-4" />
        <div>
          {!submitted ? (
            <>
              <h2 className="text-2xl mb-4">Subscribe to our Newsletter</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border border-white bg-black text-white p-2 rounded mb-4 w-full"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black rounded w-full hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>
            </>
          ) : (
            <div>
              <h2 className="text-2xl mb-4">Thank You!</h2>
              <p className="mb-4">You have been added to our email list.</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-white text-black rounded w-full hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
