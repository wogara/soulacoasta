import PageArrows from '@/components/page-arrows/page-arrows';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-black">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <picture>
          <source srcSet="/images/soulacoasta_inverted_resized.png" type="image/png" />
          <img
            src="/images/soulacoasta_inverted_resized.png"
            alt="Background"
            style={{ objectFit: 'contain'}}
          />
        </picture>
      </div>
      <PageArrows link="/about" direction="left"/>
      <PageArrows link="/shows" direction="right"/>
    </main>
  );
}
