"use client";

import { useState, useEffect, useRef } from "react";

export default function SubscribeModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
        className="border border-white bg-black p-8 rounded shadow-lg"
      >
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
                className="px-4 py-2 bg-black text-white rounded"
              >
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-2xl mb-4">Thank You!</h2>
            <p className="mb-4">You've been added to our email list.</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

