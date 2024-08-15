import EmblaCarousel from '@/components/carousel/EmblaCarousel';
import PageArrows from '@/components/page-arrows/page-arrows';
import { fetchData } from '@/lib/sanity';
import { urlFor } from '@/lib/sanityImage';

const OPTIONS = { loop: true };

export default async function VisualsPage() {
  const query = `*[_type == "imageAsset"]{
    title,
    image,
  }`;

  const images = await fetchData(query);
  const slides = images.map((image) => urlFor(image.image));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-0">
      <EmblaCarousel slides={slides} options={OPTIONS} />
      <PageArrows link="/shows" direction="left" />
      <PageArrows link="/about" direction="right" />
    </main>
  );
}
