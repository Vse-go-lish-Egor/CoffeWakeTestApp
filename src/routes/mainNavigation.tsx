import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import GreetingScreen from '../screens/GreetingScreen';
import PhotoListScreen from '../screens/PhotoListScreen';
import ViewFullPhotoScreen from '../screens/ViewFullPhotoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Greeting"
          component={GreetingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhotoList"
          component={PhotoListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewFullPhoto"
          component={ViewFullPhotoScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
