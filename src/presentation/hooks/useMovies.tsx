import {movieDBFetcher} from '../../config/adapters/http/movie.adapter';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {useEffect, useState} from 'react';

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [nowPlaying, setnowPlaying] = useState<Movie>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
    console.log(nowPlayingMovies[0]);
  };

  return {isLoading, nowPlaying};
};
