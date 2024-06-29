import { supabase } from '@/lib/db';
import PageArrows from '@/components/page-arrows/page-arrows';

export const revalidate = 60;

export default async function ShowsPage() {
  const { data: shows, error } = await supabase.from('shows').select('*');

  if (error) {
    console.error(error);
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

    // Format date in DD MON, YEAR
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    };

    return (
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-24">
        <div className="container mx-auto p-4 relative">
          <h1 className="text-3xl font-bold mb-4">Upcoming</h1>
          <table className="min-w-full bg-black mb-8">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  Date
                </th>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  City
                </th>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  Venue
                </th>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {upcomingShows.map((show) => (
                <tr key={show.id}>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {formatDate(show.date)}
                  </td>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {show.city}
                  </td>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {show.venue}
                  </td>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {show.link !== 'N/A' ? (
                      <a
                        href={show.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline"
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
          <h1 className="text-3xl font-bold mb-4">Past</h1>
          <table className="min-w-full bg-black">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  Date
                </th>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  City
                </th>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  Venue
                </th>
                <th className="py-2 px-4 text-left border-b border-white text-xl font-semibold">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {pastShows.map((show) => (
                <tr key={show.id}>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {formatDate(show.date)}
                  </td>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {show.city}
                  </td>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {show.venue}
                  </td>
                  <td className="py-2 px-4 border-b border-white text-lg">
                    {show.link !== 'N/A' ? (
                      <a
                        href={show.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline"
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
        </div>
        <PageArrows link="/" direction="left" />
        <PageArrows link="/visuals" direction="right" />
      </main>
    );
  }
}
