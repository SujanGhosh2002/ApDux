import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
        <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
        <Stack.Screen name={"SignupScreen"} component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

