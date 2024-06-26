import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import Link from 'next/link';

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const slides = [
  'https://via.placeholder.com/600x400?text=Image+1',
  'https://via.placeholder.com/600x400?text=Image+2',
  'https://via.placeholder.com/600x400?text=Image+3',
  'https://via.placeholder.com/600x400?text=Image+4',
]; // Example image URLs

export default function VisualsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <Link
        href="/shows"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </Link>
      <Link
        href="/about"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </Link>
    </main>
  );
}
