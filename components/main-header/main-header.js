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
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            href="/"
            className={`text-white hover:text-gray-400 p-2${isActive("/")}`}
          >
            HOME
          </Link>
        </li>

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
            href="/contact"
            className={`text-white hover:text-gray-400 p-2${isActive("/contact")}`}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link
            href="/pictures"
            className={`text-white hover:text-gray-400 p-2${isActive("/pictures")}`}
          >
            PICTURES
          </Link>
        </li>
      </ul>
    </nav>
  );
}
