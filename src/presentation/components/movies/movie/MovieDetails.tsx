/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';

import {Cast} from '../../../../core/entities/cast.entity';
import {CastActor} from '../../cast/CastActor';
import {Formatter} from '../../../../config/helpers/formatter';
import {FullMovie} from '../../../../core/entities/movie.entity';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}

export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>{movie.rating}</Text>

          <Text style={{marginLeft: 5, color: 'black'}}>
            - {movie.genres.join(', ')}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Plot
        </Text>
        <Text style={{fontSize: 16, color: 'black'}}>{movie.description}</Text>

        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Budget
        </Text>

        <Text style={{fontSize: 18, color: 'black'}}>
          {Formatter.currency(movie.budget)}
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 50}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
            color: 'black',
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CastActor actor={item} />}
        />
      </View>
    </>
  );
};
