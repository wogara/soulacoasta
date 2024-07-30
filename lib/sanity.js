// lib/sanity.js
import axios from 'axios';

const client = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
});

export async function fetchData(query) {
  const response = await client.get('', {
    params: {
      query,
    },
  });
  return response.data.result;
}
