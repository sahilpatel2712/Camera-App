/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import AppsGrid from './AppsGrid';
import WeatherGrid from './WeatherGrid';
import PinnedApps from './PinnedApps';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  let {width: windowWidth} = useWindowDimensions();
  const screens = [<WeatherGrid />, <AppsGrid />, <AppsGrid />, <AppsGrid />];

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / windowWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Wallpaper.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <SafeAreaView style={{flex: 1, paddingTop: '10%'}}>
          <View style={styles.scrollContainer}>
            <ScrollView
              horizontal={true}
              style={styles.scrollViewStyle}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={50}>
              {screens.map((item, index) => {
                return <View key={index}>{item}</View>;
              })}
            </ScrollView>
          </View>
          <View style={styles.indicatorContainer}>
            {screens.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.normalDots,
                  {backgroundColor: index === activeIndex ? '#fff' : '#ccc'},
                ]}
              />
            ))}
          </View>
        </SafeAreaView>
        <View style={styles.pinnedContainer}>
          <PinnedApps navigation={navigation} />
        </View>
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
  scrollContainer: {
    width: '100%',
    height: '90%',
  },
  scrollViewStyle: {
    width: '100%',
    height: '100%',
  },

  indicatorContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  pinnedContainer: {
    padding: '2%',
    alignContent: 'center',
    alignItems: 'center',
    height: '13%',
    width: '100%',
  },
});

export default Home;
