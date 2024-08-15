
// lib/sanity.js

const BASE_URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

export async function fetchData(query) {
  const url = `${BASE_URL}?query=${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch data from Sanity');
  }

  const data = await response.json();
  return data.result;
}
