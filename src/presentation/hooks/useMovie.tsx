/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/http/movie.adapter';
import {FullMovie} from '../../core/entities/movie.entity';
import {Cast} from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );
    const castPromise = await UseCases.getMovieCastUseCase(
      movieDBFetcher,
      movieId,
    );
    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
    console.log({cast});
  };
  return {isLoading, movie, cast};
};
