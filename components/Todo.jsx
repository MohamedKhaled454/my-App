import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Todo = ({ todo, handleDelete, }) => {
  const navigation = useNavigation();
  
  return (

    <TouchableOpacity
    activeOpacity={0.8}
    style={{
      width: 300,
      minHeight: 50,
      padding: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "gray",
      marginBottom: 10,
      borderRadius: 5,
    }}
  >
    <Text
      onPress={() => navigation.navigate("Todo-details", todo)}
      style={{ color: "#fff" }}
    >
      {todo.title}
    </Text>
  
    <Pressable onPress={() => handleDelete(todo.id)}>
        <Text>Delete</Text>
      </Pressable>
    
  </TouchableOpacity>

 


    // <View style={{ borderWidth: 2, borderColor: "#111"  ,
    //  width:"100px"  , backgroundColor: "gray",
    // marginTop: "10px", padding: "5px", borderRadius: "15px",  }}>
    //   <Text> {todo.title} </Text>
    //   <Pressable onPress={() => handleDelete(todo.id)}>
    //     <Text>Delete</Text>
    //   </Pressable>
    // </View>

  );
};

const styles = StyleSheet.create({});

export default Todo;
