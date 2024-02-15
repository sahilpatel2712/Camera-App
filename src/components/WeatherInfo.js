/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';

const WeatherInfo = () => {
  return (
    <View style={styles.weatherContainer}>
      <Text style={styles.degreeText}>31° C</Text>
      <Text style={styles.text}>
        <FontAwesome6 name="location-dot" style={styles.iconStyle} size={20} />{' '}
        Ahmedabad
      </Text>
      <View>
        <Foundation name="refresh" size={20} color="#fff" />
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: 10,
  },
  degreeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  },
  iconStyle: {
    marginLeft: 5,
  },
  text: {
    color: '#fff',
  },
});
