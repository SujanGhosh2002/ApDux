import {Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import My_Policy from '../screens/My_Policy';
import Profile from '../screens/Profile';
import Discover from '../screens/Discover';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0,
            paddingBottom: 5,
            height: 60,
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Image
                style={{tintColor: focused ? 'black' : 'gray'}}
                source={require('../assets/HomeIcon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Image
                style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  require('../assets/DiscoverIcon.png')
                  // focused
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Policy"
          component={My_Policy}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Image
                style={{tintColor: focused ? 'black' : 'gray'}}
                source={require('../assets/PolicyIcon.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Image
                style={{tintColor: focused ? 'black' : 'gray'}}
                source={require('../assets/ProfileIcon.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
