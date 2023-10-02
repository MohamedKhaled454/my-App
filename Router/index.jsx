import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import CompletedTodos from "../pages/CompletedTodos";
import TodoDetails from "../pages/Todo-details";
const Router = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Completed" component={CompletedTodos} />
        <Tab.Screen name="todo-details" component={TodoDetails} />
      </Tab.Navigator>
    </>
  );
};

export default Router;
