import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {StackNavigatorAuth} from './src/RootNavigator';
import {store} from './src/store';

enableScreens();
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <StackNavigatorAuth />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
