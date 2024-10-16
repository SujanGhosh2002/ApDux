import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import ProductDetailsScreen from "./screen/ProductDetailsScreen";
import CartScreen from "./screen/CartScreen";
import ReorderScreen from "./screen/ReorderScreen";
import AccountScreen from "./screen/AccountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartContext, CartProvider } from "./context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./assets/focused/home.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./assets/normal/home.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={ReorderScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./assets/focused/reorder.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./assets/normal/reorder.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                const { cartItems } = useContext(CartContext);
                if (focused) {
                  return (
                    <View style={{ position: "relative" }}>
                      <Image
                        source={require("./assets/focused/shopping_cart.png")}
                        style={{
                          height: size,
                          width: size,
                          resizeMode: "center",
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: "#E96E6E",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 10 }}>
                          {cartItems.length}
                        </Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={{ position: "relative" }}>
                      <Image
                        source={require("./assets/normal/shopping_cart.png")}
                        style={{
                          height: size,
                          width: size,
                          resizeMode: "center",
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: "#C0C0C0",
                          borderRadius: 7,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 10 }}>
                          {cartItems.length}
                        </Text>
                      </View>
                    </View>
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./assets/focused/account.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./assets/normal/account.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
        </Tab.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
