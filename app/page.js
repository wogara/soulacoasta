import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-black">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <picture>
          <source srcSet="/images/giphy.webp" type="image/webp" />
          <source srcSet="/cover.jpg" type="image/jpeg" />
          <img
            src="/images/giphy.webp"
            alt="Background"
            className="max-w-full max-h-full"
            style={{ objectFit: 'contain' }}
          />
        </picture>
      </div>
      <Link
        href="/about"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block"
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </Link>
      <Link
        href="/shows"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block"
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </Link>
    </main>
  );
}
