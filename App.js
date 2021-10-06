import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ManageScreen from "./screens/ManageScreen";
import Quiz2 from "./components/Quiz2";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Quiz2/>
  );
}