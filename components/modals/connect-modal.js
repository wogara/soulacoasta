'use client';
import { supabase } from '@/lib/db';

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
  const handleSubmit = async (e) => {
   e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setSubmitted(true);
    const { data, error } = await supabase.from('emails').insert([{ email }]);

    if (error) {
      console.error('Error inserting email:', error);
    } else {
      console.log('Email inserted successfully:', data);
    }
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
        <h2 className="text-2xl mb-4">Connect With Me</h2>

        <div>
          <h3 className="text-xl mb-1">Bookings</h3>
          <p className="mb-4">E-mail: soulacoastainc@gmail.com</p>
        </div>

<<<<<<< HEAD
        <h3 className="text-xl mb-1">Socials</h3>
        <p className="mb-0">
          <a
            href="https://www.instagram.com/soulacoasta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </p>
        <p className="mb-0">
          <a
            href="https://www.tiktok.com/@isoulacoasta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tiktok
          </a>
        </p>
        <p className="mb-0">
          <a
            href="https://www.twitter.com/soulacoasta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
        <p className="mb-4"></p>

        <h3 className="text-xl mb-1">Music</h3>
        <p className="mb-0">
          <a
            href="https://soundcloud.com/soula-coasta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud
          </a>
        </p>
        <p className="mb-0">
          <a
            href="https://soulacoasta.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bandcamp
          </a>
        </p>
        <p className="mb-0">
          <a
            href="https://www.youtube.com/@soulacoasta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </p>
        <p className="mb-0">Spotify (Coming Soon)</p>
        <p className="mb-0">Apple Music (Coming Soon)</p>

=======
        <div className="flex flex-col md:flex-row md:space-x-6">
        <div>
            <h3 className="text-xl mb-1">Music</h3>
            <p className="mb-0">
              <a
                href="https://soundcloud.com/soula-coasta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Soundcloud
              </a>
            </p>
            <p className="mb-0">
              <a
                href="https://soulacoasta.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bandcamp
              </a>
            </p>
            <p className="mb-0">
              <a
                href="https://www.youtube.com/@soulacoasta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </p>
            <p className="mb-0">Spotify (Coming Soon)</p>
            <p className="mb-0">Apple Music (Coming Soon)</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl mb-1">Socials</h3>
            <p className="mb-0">
              <a
                href="https://www.instagram.com/soulacoasta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
            <p className="mb-0">
              <a
                href="https://www.tiktok.com/@isoulacoasta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiktok
              </a>
            </p>
            <p className="mb-0">
              <a
                href="https://www.twitter.com/soulacoasta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
          </div>

        </div>

>>>>>>> bbd14e647071890279fd33d9b80a7e7ac0c6152f
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
