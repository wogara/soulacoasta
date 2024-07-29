'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DonationModal from '../modals/donation-modal';

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const currentPath = usePathname();

  const isActive = (path) => {
    return currentPath === path ? ' border border-white' : '';
  };

  const openDonationModal = () => {
    setIsDonationModalOpen(true);
  };

  const closeDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-black border-b-2 border-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white text-2xl p-3"
            onClick={closeMenu}
          >
            SOULACOASTA
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`burger-menu text-white hover:text-gray-400 p-2 border border-white rounded ${isMenuOpen ? 'open' : ''}`}
            >
              ☰
            </button>
          </div>
          <ul className="hidden md:flex justify-center space-x-4">
            <li>
              <Link
                href="/shows"
                className={`text-white text-xl hover:text-gray-400 p-3${isActive('/shows')}`}
              >
                SHOWS
              </Link>
            </li>
            <li>
              <Link
                href="/visuals"
                className={`text-white text-xl hover:text-gray-400 p-3${isActive('/visuals')}`}
              >
                VISUALS
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-white text-xl hover:text-gray-400 p-3${isActive('/about')}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <span
                className={`text-white text-xl hover:text-gray-400 p-3 cursor-pointer`}
                onClick={openDonationModal}
              >
                DONATE
              </span>
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <Link
                  href="/shows"
                  className={`text-white text-xl hover:text-gray-400 p-3${isActive('/shows')}`}
                  onClick={closeMenu}
                >
                  SHOWS
                </Link>
              </li>
              <li>
                <Link
                  href="/visuals"
                  className={`text-white text-xl hover:text-gray-400 p-3${isActive('/visuals')}`}
                  onClick={closeMenu}
                >
                  VISUALS
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-white text-xl hover:text-gray-400 p-3${isActive('/about')}`}
                  onClick={closeMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <span
                  className={`text-white text-xl hover:text-gray-400 p-3`}
                  onClick={openDonationModal}
                >
                  DONATE
                </span>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={closeDonationModal}
      />
    </div>
  );
}
