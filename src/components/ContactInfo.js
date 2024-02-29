/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Pressable,
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
import LinearGradient from 'react-native-linear-gradient';

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
      <LinearGradient
        start={{x: 0.0, y: 0.0}}
        end={{x: 0.0, y: 0.3}}
        colors={['#BBE2EC', '#F5F7F8']}
        style={{height: '100%', width: '100%', padding: '2%'}}>
        <View style={styles.imageCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: contactData.imageUri}}
              style={{height: '100%', width: '100%', borderRadius: 100}}
            />
          </View>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: 25,
                color: '#333',
                fontWeight: '600',
                textAlign: 'center',
                textTransform: 'capitalize',
              }}>
              {contactData.name}
            </Text>
          </View>
          <View style={{width: '100%'}}>
            <Text
              style={{
                fontSize: 15,
                color: '#333',
                fontWeight: '400',
                textAlign: 'center',
                textTransform: 'capitalize',
              }}>
              {contactData.work}
            </Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <View style={styles.textHeadingContainer}>
              <MaterialCommunityIcons name="email" style={styles.textHeader} />
              <Text style={styles.textHeader}>Email</Text>
            </View>
            <View style={{paddingLeft: '6%'}}>
              <Text style={styles.text}>{contactData.email}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textHeadingContainer}>
              <MaterialCommunityIcons
                name="cellphone"
                style={styles.textHeader}
              />
              <Text style={styles.textHeader}>Mobile</Text>
            </View>
            <View
              style={{
                paddingLeft: '6%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.text}>+91{contactData.phone}</Text>
              <Pressable
                onPress={() =>
                  navigation.navigate('Dial', {phone: contactData.phone})
                }>
                <Image
                  source={require('../assets/images/call_button.png')}
                  style={{height: 30, width: 30}}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textHeadingContainer}>
              <MaterialCommunityIcons
                name="home-outline"
                style={{...styles.textHeader, fontSize: 20}}
              />
              <Text style={styles.textHeader}>Address</Text>
            </View>
            <View style={{paddingLeft: '6%'}}>
              <Text style={styles.text}>{contactData.address}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textHeadingContainer}>
              <MaterialCommunityIcons
                name="facebook"
                style={{...styles.textHeader, fontSize: 18}}
              />
              <Text style={styles.textHeader}>Facebook</Text>
            </View>
            <View style={{paddingLeft: '6%'}}>
              <Text style={styles.text}>{contactData.facebook}</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textHeadingContainer}>
              <MaterialCommunityIcons
                name="twitter"
                style={{...styles.textHeader, fontSize: 18}}
              />
              <Text style={styles.textHeader}>Twitter</Text>
            </View>
            <View style={{paddingLeft: '6%'}}>
              <Text style={styles.text}>{contactData.twitter}</Text>
            </View>
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
        <ModalTester
          text="This contact will remove from your contact list."
          isModalVisible={isModalVisible}
          handleModal={handleModal}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageCard: {
    flex: 1,
    height: '30%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    gap: 10,
    paddingVertical: '2%',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'column',
    height: '65%',
    width: '100%',
    padding: '5%',
    gap: 30,
  },
  textContainer: {
    flexDirection: 'column',
  },
  textHeadingContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  textHeader: {
    fontSize: 15,
    color: '#333',
    textAlignVertical: 'center',
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
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  icon: {
    alignSelf: 'center',
    height: '100%',
    textAlignVertical: 'center',
  },
});
