/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const PinnedApps = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Dial', {phone: ''})}>
            <Image
              style={styles.image}
              source={require('../assets/images/phone_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Contacts')}>
            <Image
              style={styles.image}
              source={require('../assets/images/contact-app-icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Calculator')}>
            <Image
              style={styles.image}
              source={require('../assets/images/calculator_icon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PinnedApps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 28,
    width: '90%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    height: 65,
    width: 65,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
