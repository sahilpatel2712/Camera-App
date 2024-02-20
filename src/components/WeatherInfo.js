/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Foundation from 'react-native-vector-icons/Foundation';
import axios from 'axios';
import {REACT_APP_API_ENDPOINT} from '@env';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState({
    temp: '',
    icon: '',
  });
  const handleWeatherRefresh = async () => {
    const response = await axios.get(REACT_APP_API_ENDPOINT);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
    });
  };

  useEffect(() => {
    handleWeatherRefresh();
  }, []);

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.weatherInfo}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={styles.degreeText}>{weatherData.temp}°C</Text>
      </View>
      <Text style={styles.text}>
        <FontAwesome6 name="location-dot" style={styles.iconStyle} size={20} />{' '}
        Ahmedabad
      </Text>
      <View>
        <Pressable onPress={handleWeatherRefresh}>
          <Foundation name="refresh" size={20} color="#fff" />
        </Pressable>
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
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    // gap: ,
  },
  weatherIcon: {
    height: 50,
    width: 50,
    tintColor: '#fff',
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
    textAlign: 'center',
  },
});
