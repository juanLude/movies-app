/* eslint-disable curly */
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {StackScreenProps} from '@react-navigation/stack';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movies/movie/MovieHeader';
import {MovieDetails} from '../../components/movies/movie/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  // console.log({movieId});
  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) return <Text>Loading...</Text>;
  return (
    <View>
      {/* header */}
      <MovieHeader movie={movie!} />
      {/* details */}
      <MovieDetails movie={movie!} />
    </View>
  );
};
