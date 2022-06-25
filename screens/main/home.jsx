import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button } from "@rneui/base";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Welcome to the home screen, you're logged in</Text>
    </SafeAreaView>
  );
};

export default Home;
