//import { supabase } from '@/lib/db';
import { fetchData } from '@/lib/sanity';
import PageArrows from '@/components/page-arrows/page-arrows';
import ShowsTable from '@/components/shows-table/shows-table';
import { urlFor } from '@/lib/sanityImage';
import Head from 'next/head';
import Image from 'next/image';

export const revalidate = 60;

export default async function ShowsPage() {
  //const { data: shows, error } = await supabase.from('shows').select('*');
  //
  const query = `*[_type == "show"]{
    title,
    date,
    city,
    venue,
    link,
    address,
    image,
  }`;
  const shows = await fetchData(query);
  if (!shows) {
    console.error('ERROR LOADING SHOWS');
    return <div>Error loading shows</div>;
  } else {
    // Get today's date and set the time to the start of the day
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter previous shows (dates before today)
    const pastShows = shows.filter((show) => {
      const showDate = new Date(show.date); // Assuming show.date is the timestamp field
      return showDate < today;
    });

    // Filter upcoming shows (dates today and onward)
    const upcomingShows = shows.filter((show) => {
      const showDate = new Date(show.date); // Assuming show.date is the timestamp field
      return showDate >= today;
    });

    return (
      <>
        <Head>
          {shows.map((show) => (
            <link key={show.title} rel="preload" as="image" href={'www.google.com'} />
          ))}
          
          
        </Head>
        
        <main className="flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-24">
          <div className="container mx-auto p-4 relative">
            <h1 className="text-3xl font-bold mb-4">Upcoming</h1>
            <ShowsTable shows={upcomingShows} />
            <h1 className="text-3xl font-bold mb-4">Past</h1>
            <ShowsTable shows={pastShows} />
          </div>
          <PageArrows link="/" direction="left" />
          <PageArrows link="/visuals" direction="right" />
        </main>
      </>
    );
  }
}
