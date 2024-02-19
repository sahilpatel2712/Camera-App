/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalTester from './common/Modal';
import {useDispatch} from 'react-redux';
import {removeContact} from '../redux';

const ContactInfo = ({route, navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const contactData = route.params;
  const dispatch = useDispatch();

  const handleModal = response => {
    if (response) {
      setModalVisible(prev => !prev);
      dispatch(removeContact(contactData.id));
      navigation.navigate('Contacts');
    } else {
      setModalVisible(prev => !prev);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageParentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: contactData.imageUri}}
            style={{height: '100%', width: '100%', borderRadius: 100}}
          />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.textView}>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.text}>{contactData.name}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Phone</Text>
          <Text style={styles.text}>{contactData.phone}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Email</Text>
          <Text style={styles.text}>{contactData.email}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Address</Text>
          <Text style={styles.text}>{contactData.address}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!isModalVisible)}>
          <MaterialCommunityIcons
            style={styles.icon}
            color="#333"
            size={25}
            name="delete"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ContactForm', contactData)}>
          <MaterialCommunityIcons
            style={styles.icon}
            color="#333"
            size={25}
            name="account-edit"
          />
        </TouchableOpacity>
      </View>
      <ModalTester isModalVisible={isModalVisible} handleModal={handleModal} />
    </SafeAreaView>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    padding: '2%',
    flex: 1,
  },
  imageParentContainer: {
    marginVertical: '5%',
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#FDBF60',
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    paddingHorizontal: '4%',
    flex: 1,
  },
  textView: {
    flexDirection: 'row',

    borderRadius: 5,
    marginVertical: '3%',
  },
  text: {
    textAlignVertical: 'center',
    width: '50%',
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '5%',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: '50%',
  },
  icon: {
    alignSelf: 'center',
    height: '100%',
    textAlignVertical: 'center',
  },
});
