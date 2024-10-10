import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OTPScreen from '../screens/OTPScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'SignupScreen'} component={SignupScreen} />
        <Stack.Screen name={'SigninScreen'} component={SigninScreen} />
        <Stack.Screen
          name={'ForgotPasswordScreen'}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name={'OTPScreen'} component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
