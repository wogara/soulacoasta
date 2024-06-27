import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const OPTIONS = { loop: true };

export default function VisualsPage() {
  const imagesDirectory = path.join(process.cwd(), 'public/images/visuals');
  const slides = fs.readdirSync(imagesDirectory)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png'))
    .map(file => `/images/visuals/${file}`);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-0">
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
