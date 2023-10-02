import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Pressable } from "react-native-web";
import TodosList from "./components/TodosList";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
