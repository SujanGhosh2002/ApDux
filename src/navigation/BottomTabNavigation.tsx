import {Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import My_Policy from '../screens/My_Policy';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          // headerLeft:(focused)=><Image style={{tintColor:focused ? 'black' : 'gray', marginLeft:10}} source={require('../assets/sidebar.png')}/>,
          // header: () => <Header />,
          // headerRight:(focused)=><Image style={{tintColor:focused ? 'black' : 'gray', marginRight:10}} source={require('../assets/notification.png')}/>,
          // headerStyle:{
          //   backgroundColor:'#061A82'
          // },
          tabBarStyle: {
            backgroundColor: '#C0D4F6',
            borderTopEndRadius: 10,
            borderTopLeftRadius: 10,
            borderTopWidth: 0,
            marginBottom: -5,
            height: 60,
          },
          // tabBarActiveTintColor: '#87CEEA',
          // tabBarInactiveTintColor: 'gray',
          // tabBarLabelStyle: {
          //   display: 'none',
          // },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Image
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  focused
                    ? require('../assets/makeConnection.png')
                    : require('../assets/breakConnection.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="aaaaaa"
          component={My_Policy}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Image
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  focused
                    ? require('../assets/makeConnection.png')
                    : require('../assets/breakConnection.png')
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
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  focused
                    ? require('../assets/makeConnection.png')
                    : require('../assets/breakConnection.png')
                }
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
                // style={{tintColor: focused ? 'black' : 'gray'}}
                source={
                  focused
                    ? require('../assets/makeConnection.png')
                    : require('../assets/breakConnection.png')
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
