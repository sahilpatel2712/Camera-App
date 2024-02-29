/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ImageInfo = ({setInfoShown, image}) => {
  return (
    <View style={styles.infoContainer}>
      <View
        style={{
          alignSelf: 'center',
          width: '100%',
        }}>
        <Pressable
          onPress={() => setInfoShown(false)}
          style={{
            alignSelf: 'flex-end',
            width: '8%',
          }}>
          <Text
            style={{
              textAlign: 'right',
              fontSize: 20,
              color: '#000',
            }}>
            x
          </Text>
        </Pressable>
      </View>
      <View style={styles.textView}>
        <View style={{justifyContent: 'center'}}>
          <MaterialIcons name="date-range" size={20} color="#333" />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: '#333',
              fontWeight: '500',
            }}>
            {image.date}
          </Text>
        </View>
      </View>
      <View style={styles.textView}>
        <View>
          <MaterialIcons name="image" size={20} color="#333" />
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: '#333',
              fontWeight: '500',
            }}>
            {image.name}
          </Text>
          <Text>
            {image.height}x{image.width}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageInfo;

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    position: 'absolute',
    bottom: '0%',
    backgroundColor: '#F5F7F8',
    width: '90%',
    height: '20%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: '5%',
    gap: 10,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  textView: {
    width: '100%',
    flexDirection: 'row',
    gap: 20,
  },
});
