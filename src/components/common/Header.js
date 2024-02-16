/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={style.headerContainer}>
      <TouchableOpacity style={style.headerButton}>
        <AntDesign name="plus" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  headerButton: {
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 50,
  },
});
