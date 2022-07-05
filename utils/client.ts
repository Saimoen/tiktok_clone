import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'mbp4kd9c',
  dataset: 'production',
  apiVersion: '2022-04-07',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
