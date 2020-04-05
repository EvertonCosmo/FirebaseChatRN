import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export const StackNavigatorAuth = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      shifting={false}
      inactiveColor={'#333'}
      sceneAnimationEnabled={true}
      keyboardHidesNavigationBar={true}
      barStyle={{
        backgroundColor: '#35aaff',
      }}>
      <Tab.Screen
        name={'login'}
        component={Login}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcon name={'person'} size={26} color={color} />
          ),
          tabBarAccessibilityLabel: 'login',
        }}
      />
      <Tab.Screen
        name={'signup'}
        component={SignUp}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcon name={'person-add'} size={26} color={color} />
          ),
          tabBarAccessibilityLabel: 'signUp',
        }}
      />
    </Tab.Navigator>
  );
};
