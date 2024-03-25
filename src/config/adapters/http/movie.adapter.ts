import {AxiosAdapter} from './axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '7f3a14bfdecb6ab697cb0ab8b301ef18',
    language: 'es',
  },
});
