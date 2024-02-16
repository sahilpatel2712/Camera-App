/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return <StackNavigator />;
};

export default App;
