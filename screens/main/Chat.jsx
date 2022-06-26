import { Text, SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Octicons } from "@expo/vector-icons";

const Chat = ({ navigation }) => {
  const [send, setSend] = useState(false);
  const [message, setMessage] = useState();
  const [received, setReceived] = useState("");
  const messageHandler = ()=>{
    setSend(true);
    setReceived(message)
    setMessage("");    

  }
  return (
    <View style={styles.container}>
      <View style={styles.today}>
        <Text style={styles.todaytext}>Today</Text>
        {send && <Text style={styles.msg}>{received}</Text>}
      </View>

      <View style={styles.input}>
        <TextInput
          onChangeText={(text) => setMessage(text)}
          left={<TextInput.Icon name="emoticon" />}
          style={styles.inputTxt}
          value={message}
          placeholder="   Enter your message..."
          right={<TextInput.Icon name="send"  onPress={messageHandler} />}
        />
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
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
  msg: {
    color: "black",
    padding: 20,
    // backgroundColor: "white",
    borderWidth:1,
    borderBottomRightRadius:15,
    borderRadius: 15,
    marginTop: 40,
    marginLeft: 230,
  },
});
