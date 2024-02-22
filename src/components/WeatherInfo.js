/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import axios from 'axios';
import {REACT_APP_API_ENDPOINT} from '@env';
import LinearGradient from 'react-native-linear-gradient';

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState({
    temp: '-',
    icon: '-',
    high: '-',
    low: '-',
    description: '-',
    humidity: '-',
  });
  const handleWeatherRefresh = async () => {
    const response = await axios.get(REACT_APP_API_ENDPOINT);
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
    });
  };

  useEffect(() => {
    handleWeatherRefresh();
  }, []);

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      colors={['#4c669f', '#BBE2EC']}
      style={styles.weatherContainer}>
      <View>
        <View style={styles.weatherInfo}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`,
            }}
            style={styles.weatherIcon}
          />
          <Text style={styles.degreeText}>{weatherData.temp}°C</Text>
        </View>
        <View style={{flex: 1, gap: 8}}>
          <Text style={styles.text}>
            <FontAwesome6 name="location-arrow" style={styles.iconStyle} />{' '}
            Ahmedabad
          </Text>
          <Text style={styles.text}>
            {' '}
            <FontAwesome6 name="droplet" style={styles.iconStyle} />
            {'  '}
            {weatherData.humidity}%
          </Text>
        </View>
      </View>
      <View style={{width: '50%'}}>
        <View
          style={{
            alignSelf: 'center',
            flex: 1,
            width: '100%',
            gap: 25,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              textTransform: 'capitalize',
              fontWeight: '600',
              marginTop: 4,
              textAlign: 'center',
            }}>
            {weatherData.description}
          </Text>
          <View style={{flex: 1, gap: 3}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textTransform: 'capitalize',
                fontWeight: '600',
                textAlign: 'center',
              }}>
              H : {weatherData.high}°
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                textTransform: 'capitalize',
                fontWeight: '600',
                textAlign: 'center',
              }}>
              L : {weatherData.low}°
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  weatherContainer: {
    flexDirection: 'row',
    height: '95%',
    gap: 10,
    padding: '5%',
    borderRadius: 30,
    opacity: 0.9,
    justifyContent: 'space-around',
  },
  weatherInfo: {
    flexDirection: 'row',
  },
  weatherIcon: {
    tintColor: '#fff',
    height: 50,
    width: 50,
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
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});
