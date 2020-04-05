import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {StackNavigatorAuth} from './src/RootNavigator';
import {store} from './src/store';
enableScreens();
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigatorAuth />
      </Provider>
    </NavigationContainer>
  );
};
export default App;
