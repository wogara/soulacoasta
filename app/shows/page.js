import { supabase } from '@/lib/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const revalidate = 60;

export default async function ShowsPage() {
  const { data: shows, error } = await supabase.from('shows').select('*');

  if (error) {
    console.error(error);
    return <div>Error loading shows</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4 relative">
        <h1 className="text-2xl mb-4">Shows</h1>
        <table className="min-w-full bg-black border border-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">City</th>
              <th className="py-2 px-4 border">Venue</th>
              <th className="py-2 px-4 border">Tickets</th>
            </tr>
          </thead>
          <tbody>
            {shows.map(show => (
              <tr key={show.id}>
                <td className="py-2 px-4 border">{new Date(show.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border">{show.city}</td>
                <td className="py-2 px-4 border">{show.venue}</td>
                <td className="py-2 px-4 border">
                  {show.tickets ? (
                    <a href={show.tickets} target="_blank" rel="noopener noreferrer" className="text-blue-500">Buy Tickets</a>
                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        href="/about"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </Link>
      <Link
        href="/visuals"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </Link>
    </main>
  );
}
