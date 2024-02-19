/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, {useRef, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AppsGrid from './AppsGrid';
import WeatherGrid from './WeatherGrid';
import PinnedApps from './PinnedApps';

const Home = ({navigation}) => {
  const [state, setState] = useState();
  const ref = useRef();
  const data = [<WeatherGrid />, <AppsGrid />, <AppsGrid />];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Wallpaper.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <SafeAreaView style={{flex: 1, paddingTop: '10%'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Carousel
              ref={ref}
              data={data}
              activeAnimationType="spring"
              sliderWidth={395}
              itemWidth={369}
              inactiveSlideOpacity={0}
              onSnapToItem={index => setState(index)}
              renderItem={({item, index}) => (
                <View style={styles.content}>{item}</View>
              )}
            />
          </View>
          <Pagination
            containerStyle={styles.paginationContainer}
            carouselRef={ref}
            dotsLength={data.length}
            activeDotIndex={state}
            dotStyle={{backgroundColor: 'white'}}
            tappableDots={true}
            inactiveDotScale={1}
          />
        </SafeAreaView>
        <PinnedApps navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 1,
    height: '100%',
  },
  carouselContainer: {
    verticalAlign: 'top',
    margin: 0,
  },
  paginationContainer: {},
  content: {
    backgroundColor: 'transplant',
    width: '100%',
    borderRadius: 5,
    height: '100%',
  },
});

export default Home;
