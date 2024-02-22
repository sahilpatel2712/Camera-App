/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WeatherInfo from './WeatherInfo';
import {weatherScreenApps} from '../modules/data';

const WeatherGrid = () => {
  const width = Dimensions.get('screen').width;

  return (
    <View style={{flex: 1, justifyContent: 'center', width: width}}>
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
          renderItem={({item, index}) => (
            <View style={[styles.itemView]} key={index}>
              <TouchableOpacity style={styles.item}>
                <Image source={item.uri} style={styles.image} />
              </TouchableOpacity>
              <Text style={styles.bottomText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default WeatherGrid;

const styles = StyleSheet.create({
  weatherInfo: {
    height: '30%',
    paddingHorizontal: '8%',
    justifyContent: 'center',
    marginTop: '5%',
  },
  flatList: {
    flex: 1,
  },
  flatContainer: {
    alignSelf: 'center',
  },
  itemView: {
    marginVertical: 25,
    marginHorizontal: 25,
    verticalAlign: 'middle',
    height: 70,
    width: 70,
  },
  item: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    opacity: 1,
  },
  image: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  bottomText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
