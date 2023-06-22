import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://smart-coach-api.vercel.app/api',
    prepareHeaders: (headers) => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDb2FjaEluZm8iOnsiY29hY2hJZCI6MX0sImlhdCI6MTY4NjkzNDg4NywiZXhwIjoxNjg3NTM5Njg3fQ.nqxeMCZMbyCsqEn3chFfFYTZfohERTCTEfbZO6KLmb8';
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Player', 'Team', 'Event'],
  endpoints: () => ({}),
});