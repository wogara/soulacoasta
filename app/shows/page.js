import { supabase } from '@/lib/db';

export const revalidate = 60;

export default async function ShowsPage() {
  const { data: shows, error } = await supabase.from('shows').select('*');

  if (error) {
    console.error(error);
    return <div>Error loading shows</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Shows</h1>
      <table className="min-w-full bg-black border border-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Flyer</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">City</th>
            <th className="py-2 px-4 border">Venue</th>
            <th className="py-2 px-4 border">Tickets</th>
          </tr>
        </thead>
        <tbody>
          {shows.map(show => (
            <tr key={show.id}>
              <td className="py-2 px-4 border">
                <img src={show.flyer} alt={`${show.city} flyer`} className="w-24 h-24 object-cover" />
              </td>
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
  );
}

