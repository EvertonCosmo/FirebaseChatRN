import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export const Stack = createStackNavigator();

export const StackNavigatorAuth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: true,
        gestureEnabled: false,
        headerShown: false,
      }}>
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
    </Stack.Navigator>
  );
};
