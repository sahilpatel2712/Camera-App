/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WeatherInfo from './WeatherInfo';
import {weatherScreenApps} from '../modules/data';

const WeatherGrid = () => {
  return (
    <>
      <View style={styles.weatherInfo}>
        <WeatherInfo />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={weatherScreenApps}
          numColumns={3}
          inverted={true}
          horizontal={false}
          columnWrapperStyle={styles.flatContainer}
          renderItem={({item}) => (
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
    flex: 1,
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
