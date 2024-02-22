/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {pick} from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ErrorText from './common/ErrorText';
import {ContactValidation} from '../modules/validation';
import {generateID} from '../modules/helper';
import {useDispatch} from 'react-redux';
import {addContact, updateContact} from '../redux';
import LinearGradient from 'react-native-linear-gradient';

const defaultUserProfile =
  'https://cdn-icons-png.freepik.com/256/3135/3135715.png?ga=GA1.1.1664036746.1708082225';

const ContactForm = ({route, navigation}) => {
  const [imageUri, setImageUri] = useState(defaultUserProfile);
  const dispatch = useDispatch();
  const initialValue = route.params;

  useEffect(() => {
    if (initialValue.imageUri !== '') {
      setImageUri(initialValue.imageUri);
    }
  }, []);

  async function handleSelect() {
    const prom = await pick({
      allowMultiSelection: false,
      type: 'image/jpeg',
      copyTo: 'documentDirectory',
    });
    setImageUri(prom[0].fileCopyUri);
  }

  const handleSubmitForm = value => {
    if (value.id === null) {
      let id = generateID();
      let data = {...value, id: id, imageUri: imageUri};
      dispatch(addContact(data));
    } else {
      let data = {...value, imageUri: imageUri};
      dispatch(updateContact(data));
    }
    navigation.navigate('Contacts');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          start={{x: 0.0, y: 0.0}}
          end={{x: 0.0, y: 1.0}}
          colors={['#BBE2EC', '#F5F7F8']}
          style={{flex: 1, padding: '2%'}}>
          <Pressable style={{flex: 1}} onPress={() => Keyboard.dismiss()}>
            <View style={styles.imagePickerContainer}>
              <TouchableOpacity
                style={styles.imagePicker}
                onPress={handleSelect}>
                <Image
                  source={{
                    uri: imageUri,
                  }}
                  style={{height: '100%', width: '100%', borderRadius: 100}}
                />
                <FontAwesome5
                  name="camera"
                  style={styles.profileIcon}
                  color="#fff"
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Formik
                initialValues={initialValue}
                onSubmit={handleSubmitForm}
                validationSchema={ContactValidation}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <View style={{height: '90%'}}>
                      <View style={styles.inputFieldView}>
                        <AntDesign style={styles.icon} name="user" size={20} />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          showSoftInputOnFocus={true}
                          placeholder="Name"
                          onChangeText={handleChange('name')}
                          onBlur={handleBlur('name')}
                          value={values.name}
                        />
                      </View>
                      {touched.name && errors.name && (
                        <ErrorText massage={errors.name} />
                      )}

                      <View style={styles.inputFieldView}>
                        <Feather style={styles.icon} name="phone" size={20} />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          placeholder="Phone"
                          inputMode="numeric"
                          onChangeText={handleChange('phone')}
                          onBlur={handleBlur('phone')}
                          value={values.phone}
                        />
                      </View>
                      {touched.phone && errors.phone && (
                        <ErrorText massage={errors.phone} />
                      )}
                      <View style={styles.inputFieldView}>
                        <AntDesign style={styles.icon} name="mail" size={20} />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          showSoftInputOnFocus={true}
                          placeholder="Email"
                          inputMode="email"
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                        />
                      </View>

                      <View style={styles.inputFieldView}>
                        <Ionicons
                          style={styles.icon}
                          name="location-outline"
                          size={20}
                        />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          showSoftInputOnFocus={true}
                          placeholder="Address"
                          inputMode="text"
                          onChangeText={handleChange('address')}
                          onBlur={handleBlur('address')}
                          value={values.address}
                        />
                      </View>
                      <View style={styles.inputFieldView}>
                        <Ionicons
                          style={styles.icon}
                          name="bag-outline"
                          size={20}
                        />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          showSoftInputOnFocus={true}
                          placeholder="Work info"
                          inputMode="text"
                          onChangeText={handleChange('work')}
                          onBlur={handleBlur('work')}
                          value={values.work}
                        />
                      </View>
                      <View style={styles.inputFieldView}>
                        <Ionicons
                          style={styles.icon}
                          name="logo-facebook"
                          size={20}
                        />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          showSoftInputOnFocus={true}
                          placeholder="Facebook"
                          inputMode="text"
                          onChangeText={handleChange('facebook')}
                          onBlur={handleBlur('facebook')}
                          value={values.facebook}
                        />
                      </View>
                      <View style={styles.inputFieldView}>
                        <Ionicons
                          style={styles.icon}
                          name="logo-twitter"
                          size={20}
                        />
                        <TextInput
                          placeholderTextColor="#9BA4B5"
                          style={styles.inputField}
                          showSoftInputOnFocus={true}
                          placeholder="Twitter"
                          inputMode="text"
                          onChangeText={handleChange('twitter')}
                          onBlur={handleBlur('twitter')}
                          value={values.twitter}
                        />
                      </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonsText}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}>
                        <Text style={styles.buttonsText}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>
          </Pressable>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePickerContainer: {
    marginVertical: '5%',
    height: '17%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePicker: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIcon: {
    position: 'absolute',
    bottom: '0%',
    right: '20%',
  },
  inputContainer: {
    paddingHorizontal: '3%',
    flex: 1,
  },
  inputFieldView: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: '3%',
    width: '100%',
  },
  inputField: {
    color: '#000',
    width: '90%',
  },
  icon: {
    alignSelf: 'center',
    color: '#333',
  },
  buttonsContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: '8%',
    width: '100%',
    marginTop: '2%',
  },
  button: {width: '50%'},
  buttonsText: {
    textAlign: 'center',
    height: '100%',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
