import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ManageScreen from "./screens/ManageScreen";
import FoodScreen from "./screens/FoodScreen";
import LoginScreen from "./screens/LoginScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "What2Eat",
          headerStyle: {
            backgroundColor: '#424242',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Manage" component={ManageScreen} />
        <Stack.Screen name="Food" component={FoodScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}