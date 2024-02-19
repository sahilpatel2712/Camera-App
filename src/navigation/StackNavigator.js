/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import DialPad from '../components/DialPad';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import ContactInfo from '../components/ContactInfo';
import Header from '../components/common/Header';
import ContactForm from '../components/ContactForm';
import Contacts from '../components/Contact';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setInitialState} from '../redux';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const setContacts = async () => {
    const contacts = await AsyncStorage.getItem('contactList');
    if (contacts) {
      dispatch(setInitialState(JSON.parse(contacts)));
    }
  };

  useEffect(() => {
    setContacts();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Dial" component={DialPad} />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{headerRight: props => <Header {...props} />}}
        />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen
          name="ContactInfo"
          component={ContactInfo}
          options={{title: 'Contacts'}}
        />
        <Stack.Screen
          name="ContactForm"
          component={ContactForm}
          options={{title: 'Contacts'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
