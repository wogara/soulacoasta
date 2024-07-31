import imageUrlBuilder from '@sanity/image-url';
import createClient from '@sanity/client';

// Configure the Sanity client for image URL generation
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-07-01',
  token:process.env.SANITY_API_TOKEN,
  useCdn: true, // Use the CDN for faster response times
});

const builder = imageUrlBuilder(client);

export async function urlFor(source) {
  return builder.image(source);
}

