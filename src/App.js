/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import StackNavigator from './navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './redux/store';


const App = () => {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
