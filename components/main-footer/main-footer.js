"use client";

import { useState, useEffect, useRef } from "react";

export default function ButtonGroup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/sample-12s.mp3");
    audio.preload = "auto";
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

  return (
    <div className="bg-black border-b-2 border-white p-4 fixed bottom-0 left-0 w-full z-50">
      <div className="flex justify-between">
        <button className="text-white hover:text-gray-400 p-2 border border-white">
          Left
        </button>
        <button
          onClick={togglePlayPause}
          className="text-white hover:text-gray-400 p-2 border border-white"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="text-white hover:text-gray-400 p-2 border border-white">
          Right
        </button>
      </div>
    </div>
  );
}

