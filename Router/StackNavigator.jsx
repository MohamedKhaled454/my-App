import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import TodoDetails from "../pages/Todo-details";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator  screenOptions={{headerShown: false}}  >
        <Stack.Screen name="Todos" component={Home} />
        <Stack.Screen name="Todo-details" component={TodoDetails}/>
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
