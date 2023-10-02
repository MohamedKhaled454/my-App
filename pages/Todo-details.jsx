import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const TodoDetails = () => {
  const params = useRoute().params;
  return (
    <View>
      {params && (
        <>
          <Text>{params.title}</Text>
          <Text>{params.description}</Text>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({});
export default TodoDetails;