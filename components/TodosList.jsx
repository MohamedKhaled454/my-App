import { View, Text } from "react-native";
import React from "react";
import Todo from "./Todo";

const TodosList = ({ todos, handleDelete }) => {
  return (
    <View>
      {todos?.map((item, index) => (
        <Todo handleDelete={handleDelete} key={index} todo={item} />
      ))}
    </View>
  );
};

export default TodosList;
