import React, {Fragment, useEffect} from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

import {RootReducerType} from './store/modules/rootReducer';
import {Creators as sessionCreators} from './store/ducks/session';
import Spinner from 'react-native-loading-spinner-overlay';
export const Stack = createStackNavigator();

export const StackNavigatorAuth = () => {
  const {isAuthenticated, loading} = useSelector(
    (state: RootReducerType) => state.session,
  );
  useEffect(() => {
    // dispatch(sessionCreators.AuthStateChange());
  }, []);
  return (
    <Fragment>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          gestureEnabled: false,
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <Stack.Screen name={'dashboard'} component={Dashboard} />
        ) : (
          <Fragment>
            <Stack.Screen
              name={'login'}
              component={Login}
              options={{
                transitionSpec: {
                  open: TransitionSpecs.ScaleFromCenterAndroidSpec,
                  close: TransitionSpecs.RevealFromBottomAndroidSpec,
                },
              }}
            />
            <Stack.Screen
              name={'signup'}
              component={SignUp}
              options={{
                transitionSpec: {
                  open: TransitionSpecs.FadeOutToBottomAndroidSpec,
                  close: TransitionSpecs.FadeOutToBottomAndroidSpec,
                },
              }}
            />
          </Fragment>
        )}
      </Stack.Navigator>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{color: '#fff'}}
      />
    </Fragment>
  );
};
