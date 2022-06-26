import { Text, SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Octicons } from "@expo/vector-icons";

const Chat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.today}>
        <Text style={styles.todaytext}>Today</Text>
      </View>

      <View style={styles.input}>
        <TextInput
          left={<TextInput.Icon name="emoticon" />}
          style={styles.inputTxt}
          placeholder="   Enter your message..."
          right={<TextInput.Icon name="send" />}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingTop : 45,
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "space-between",
  },

  today: {
    alignItems: "center",
    margin: 12,
    borderRadius: 15,
  },
  todaytext: {
    backgroundColor: "lightgray",
    padding: 9,
  },
  input: {
    // alignItems : 'center',
    justifyContent: "flex-end",
  },
  inputTxt: {
    justifyContent: "center",
    // width: "85%",
  },
});
