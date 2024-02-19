/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
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
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <View style={styles.imagePickerContainer}>
          <TouchableOpacity style={styles.imagePicker} onPress={handleSelect}>
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
                <View style={styles.inputFieldView}>
                  <AntDesign style={styles.icon} name="user" size={20} />
                  <TextInput
                    placeholderTextColor="#000"
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
                    placeholderTextColor="#000"
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
                    placeholderTextColor="#000"
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
                    placeholderTextColor="#000"
                    style={styles.inputField}
                    showSoftInputOnFocus={true}
                    placeholder="Address"
                    inputMode="text"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                  />
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
      </KeyboardAvoidingView>
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
    marginVertical: '5%',
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
  },
  inputField: {
    color: '#000',
  },
  icon: {
    alignSelf: 'center',
    color: '#000',
  },
  buttonsContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '1%',
    alignSelf: 'center',
    height: '5%',
    width: '100%',
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
