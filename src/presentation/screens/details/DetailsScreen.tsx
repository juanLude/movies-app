/* eslint-disable curly */
import React from 'react';

import {RootStackParams} from '../../navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movies/movie/MovieHeader';
import {MovieDetails} from '../../components/movies/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // console.log({movieId});
  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />;
  return (
    <ScrollView>
      {/* header */}
      <MovieHeader movie={movie!} />
      {/* details */}
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
