import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Platform } from "react-native";
import { Pressable } from "react-native-web";
import TodosList from "../components/TodosList";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const os = Platform.OS;
  let [todos, setTodos] = useState([]);
  let [title, setTitle] = useState("");
  let [descrpation, setDescrpation] = useState("");

  const handleSubmit = (title, descrpation) => {
    const isTodoFound = todos.find((todo) => todo.title == title);
    if (title && descrpation && !isTodoFound) {
      const newTodo = { id: todos.length, title, descrpation, isDone: false };
      setTodos([...todos, newTodo]);
    }
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  useEffect(() => {
    (async () => {
      const data = await retrieveData();
      if (data.length > 0) setTodos([...todos, ...data]);
    })();
  }, []);

  useEffect(() => {
    storeData(todos);
  }, [todos]);

  return (
    <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
      <View style={styles.container}>
        <Text
          style={{ color: os == "ios" ? "gray" : "black", fontSize: "40px" }}
        >
          to do App
        </Text>
        <TextInput
          style={{
            backgroundColor: "gray",
            marginTop: "20px",
            padding: "15px",
            borderRadius: "15px",
          }}
          placeholder="Enter Title "
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={{
            backgroundColor: "gray",
            marginTop: "20px",
            padding: "15px",
            borderRadius: "15px",
          }}
          placeholder=" descrpation"
          onChangeText={(text) => setDescrpation(text)}
        />
        <Pressable
          style={{
            backgroundColor: "gray",
            marginTop: "20px",
            padding: "5px",
            borderRadius: "15px",
          }}
          onPress={() => handleSubmit(title, descrpation)}
        >
          <Text> submit</Text>
        </Pressable>
      </View>
      <View>
        <TodosList handleDelete={handleDelete} todos={todos} />
      </View>
    </View>
  );
}

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem("todos", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("todos");
    if (value !== null) {
      return await JSON.parse(value);
    }
  } catch (error) {
    console.error(error);
  }
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
