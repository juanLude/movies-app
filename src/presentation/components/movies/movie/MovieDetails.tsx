/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../../../../core/entities/movie.entity';

interface Props {
  movie: FullMovie;
}
export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
        </View>
      </View>

      <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
        Story
      </Text>
    </>
  );
};
