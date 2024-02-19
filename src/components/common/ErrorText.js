/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorText = ({massage}) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{massage}</Text>
    </View>
  );
};

export default ErrorText;

const style = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    position: 'relative',
    left: 10,
  },
});
