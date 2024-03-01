/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InfoModal = ({image, infoShown, setInfoShown}) => {
  return (
    <Modal
      isVisible={infoShown}
      style={{backgroundColor: 'red', alignSelf: 'center'}}>
      <View style={styles.infoContainer}>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            marginTop: 5,
          }}>
          <Pressable
            onPress={() => setInfoShown(false)}
            style={{
              alignSelf: 'flex-end',
              width: '15%',
            }}>
            <MaterialIcons
              style={{
                textAlign: 'right',
                color: '#000',
              }}
              name="cancel"
              size={25}
            />
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
            <Text style={{color: '#333'}}>
              {image.height}x{image.width}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    gap: 15,
    backgroundColor: '#fff',
    width: '100%',
    position: 'absolute',
    bottom: '1%',
    height: '20%',
    alignSelf: 'center',
    marginHorizontal: '6%',
    borderRadius: 20,
    paddingRight: '2%',
    paddingLeft: '8%',
  },
  textView: {
    width: '100%',
    flexDirection: 'row',
    gap: 20,
    justifyContent: '',
  },
});
