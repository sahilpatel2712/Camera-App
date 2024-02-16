/* eslint-disable prettier/prettier */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DialPad from '../components/DialPad';
import Contact from '../components/Contact';
import Calculator from '../components/Calculator';
import Home from '../components/Home';
import ContactInfo from '../components/ContactInfo';
import Header from '../components/common/Header';
import ContactForm from '../components/ContactForm';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ContactForm" component={ContactForm} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Dial" component={DialPad} />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{headerRight: props => <Header {...props} />}}
        />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
