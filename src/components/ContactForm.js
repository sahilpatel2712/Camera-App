/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {pick} from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ContactForm = () => {
  async function handleSelect() {
    const prom = await pick({
      allowMultiSelection: true,
      type: 'image/jpeg',
      copyTo: 'cachesDirectory',
    });

    console.log(prom);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagePickerContainer}>
        <TouchableOpacity style={styles.imagePicker} onPress={handleSelect}>
          <FontAwesome5 name="camera" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    padding: '2%',
    flex: 1,
  },
  imagePickerContainer: {
    marginTop: '2%',
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    backgroundColor: '#FDBF60',
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
