/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

const ModalTester = ({isModalVisible, handleModal, text}) => {
  return (
    <View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.container}>
          <View style={styles.modalTextContainer}>
            <Text style={styles.modalText}>{text}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleModal(false)}>
              <Text style={styles.buttonsText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => handleModal(true)}>
              <Text style={styles.buttonsText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalTester;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: '1%',
    height: '15%',
    alignSelf: 'center',
    marginHorizontal: '6%',
    borderRadius: 20,
    padding: '1%',
  },
  modalTextContainer: {
    height: '30%',
    marginTop: '2%',
  },
  modalText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
  },
  buttonContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '60%',
    width: '100%',
  },
  modalButton: {
    width: '50%',
  },
  buttonsText: {
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
