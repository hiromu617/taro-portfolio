import { createClient } from 'microcms-js-sdk';

const API_KEY: string = process.env.API_KEY!

export const client = createClient({
  serviceDomain: 'taroportforio',
  apiKey: API_KEY,
});
