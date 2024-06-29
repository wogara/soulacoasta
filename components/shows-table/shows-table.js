'use client';

import { useState, useEffect, useRef } from 'react';
import ShowModal from '../modals/show-modal';

export default function ShowsTable({ shows }) {
  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);

  const openShowModal = (show) => {
    console.log('selected');
    setIsShowModalOpen(true);
    setSelectedShow(show);
  };

  const closeShowModal = () => {
    setIsShowModalOpen(false);
    setSelectedShow(null);
  };

  // Format date in DD MON, YEAR
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <>
      <table className="min-w-full bg-black mb-8">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left border-b border-white text-sm md:text-xl font-semibold w-1/3 md:w-1/4">
              Date
            </th>
            <th className="py-2 px-4 text-left border-b border-white text-sm md:text-xl font-semibold w-1/3 md:w-1/4">
              City
            </th>
            <th className="py-2 px-4 text-left border-b border-white text-sm md:text-xl font-semibold w-1/3 md:w-1/4">
              Venue
            </th>
            <th className="hidden md:table-cell py-2 px-4 text-left border-b border-white text-sm md:text-xl font-semibold w-1/3 md:w-1/4">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => (
            <tr
              key={show.id}
              onClick={() => openShowModal(show)}
              className="cursor-pointer md:hover:bg-white md:hover:text-black"
            >
              <td className="py-2 px-4 border-b border-white text-xs md:text-lg">
                {formatDate(show.date)}
              </td>
              <td className="py-2 px-4 border-b border-white text-xs md:text-lg">
                {show.city}
              </td>
              <td className="py-2 px-4 border-b border-white text-xs md:text-lg">
                {show.venue}
              </td>
              <td className="hidden md:table-cell py-2 px-4 border-b border-white text-xs md:text-lg">
                {show.link !== 'N/A' ? (
                  <a
                    href={show.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline md:hover:text-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Link
                  </a>
                ) : (
                  ''
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedShow && <h1>{!selectedShow}</h1>}
      {selectedShow && (
        <ShowModal
          isOpen={isShowModalOpen}
          show={selectedShow}
          onClose={closeShowModal}
        />
      )}
    </>
  );
}
