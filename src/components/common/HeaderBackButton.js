/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios-new" size={22} color="#000" />
      </Pressable>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: '100%',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
