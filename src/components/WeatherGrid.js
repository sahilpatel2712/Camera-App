/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WeatherInfo from './WeatherInfo';

const data = [
  {
    id: 4,
    text: 'App',
  },
  {
    id: 5,
    text: 'App',
  },
  {
    id: 6,
    text: 'App',
  },
  {
    id: 7,
    text: 'App',
  },
  {
    id: 8,
    text: 'App',
  },
  {
    id: 9,
    text: 'App',
  },
];
const WeatherGrid = () => {
  return (
    <>
      <View style={styles.weatherInfo}>
        <WeatherInfo />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={data}
          numColumns={3}
          inverted={true}
          horizontal={false}
          columnWrapperStyle={styles.flatContainer}
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default WeatherGrid;

const styles = StyleSheet.create({
  weatherInfo: {
    height: '30%',
  },
  flatList: {
    marginBottom: '25%',
  },
  flatContainer: {
    alignSelf: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 20,
    verticalAlign: 'middle',
    height: 75,
    width: 75,
    borderRadius: 20,
    backgroundColor: '#fff',
    opacity: 1,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    textAlignVertical: 'center',
  },
});
