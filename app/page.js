import PageArrows from '@/components/page-arrows/page-arrows';

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
      <PageArrows link="/about" direction="left"/>
      <PageArrows link="/shows" direction="right"/>
    </main>
  );
}
