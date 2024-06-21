"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubscribeModal from "../modals/subscribe-modal";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPath = usePathname();

  const isActive = (path) => {
    return currentPath === path ? " border border-white" : "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav className="bg-black border-b-2 border-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl" onClick={closeMenu}>
            SOULACOASTA
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`burger-menu text-white hover:text-gray-400 p-2 border border-white rounded ${isMenuOpen ? "open" : ""}`}
            >
              ☰
            </button>
          </div>
          <ul className="hidden md:flex justify-center space-x-4">
            <li>
              <Link
                href="/about"
                className={`text-white hover:text-gray-400 p-2${isActive("/about")}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/music"
                className={`text-white hover:text-gray-400 p-2${isActive("/music")}`}
              >
                MUSIC
              </Link>
            </li>
            <li>
              <Link
                href="/visuals"
                className={`text-white hover:text-gray-400 p-2${isActive("/visuals")}`}
              >
                VISUALS
              </Link>
            </li>
            <li>
              <Link
                href="/shows"
                className={`text-white hover:text-gray-400 p-2${isActive("/shows")}`}
              >
                SHOWS
              </Link>
            </li>
            <li>
              <Link
                href="/socials"
                className={`text-white hover:text-gray-400 p-2${isActive("/socials")}`}
              >
                SOCIALS
              </Link>
            </li>
          </ul>
          <button onClick={openModal} className="hidden md:block text-white hover:text-gray-400 p-2 border border-white rounded">
            SUBSCRIBE
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/about"
                  className={`text-white hover:text-gray-400 p-2${isActive("/about")}`}
                  onClick={closeMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/music"
                  className={`text-white hover:text-gray-400 p-2${isActive("/music")}`}
                  onClick={closeMenu}
                >
                  MUSIC
                </Link>
              </li>
              <li>
                <Link
                  href="/visuals"
                  className={`text-white hover:text-gray-400 p-2${isActive("/visuals")}`}
                  onClick={closeMenu}
                >
                  VISUALS
                </Link>
              </li>
              <li>
                <Link
                  href="/shows"
                  className={`text-white hover:text-gray-400 p-2${isActive("/shows")}`}
                  onClick={closeMenu}
                >
                  SHOWS
                </Link>
              </li>
              <li>
                <Link
                  href="/socials"
                  className={`text-white hover:text-gray-400 p-2${isActive("/socials")}`}
                  onClick={closeMenu}
                >
                  SOCIALS
                </Link>
              </li>
              <li>
                <button onClick={openModal} className="text-white hover:text-gray-400 p-2 border border-white rounded">
                  SUBSCRIBE
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <SubscribeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
