import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoadingIndicator} from './src/components';
import {StackNavigatorAuth} from './src/RootNavigator';
import {store, persistor} from './src/store';
import {enableScreens} from 'react-native-screens';
import {Provider, useSelector} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {Screen} from './src/components';

enableScreens();
const App = () => {
  return (
    <Screen>
      <NavigationContainer>
        <Provider store={store}>
          <PaperProvider>
            <PersistGate persistor={persistor} loading={<LoadingIndicator />}>
              <StackNavigatorAuth />
            </PersistGate>
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    </Screen>
  );
};
export default App;
