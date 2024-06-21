"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const currentPath = usePathname();

  const isActive = (path) => {
    return currentPath === path ? " border border-white" : "";
  };
  return (
    <nav className="bg-black border-b-2 border-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white text-xl">
          SOULACOASTA
        </Link>
        <ul className="flex justify-center space-x-4">
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
        <button className="text-white hover:text-gray-400 p-2 border border-white rounded">
          SUBSCRIBE
        </button>
      </div>
    </nav>
  );
}
