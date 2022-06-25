import React from "react";
import { Text, View, ActivityIndicator, Pressable, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import DefaultImage from "./icon.png";

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const Stack = createNativeStackNavigator();

function Welcome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          width: "100%",
          height: "80%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: "#1F376A",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // flex: 2,
        }}
      >
        <Image
          source={{ uri: DEFAULT_IMAGE }}
          style={{
            width: 260,
            height: 260,
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 60,
          }}
        >
          PocketBA
        </Text>
        {/* <ActivityIndicator /> */}
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "20%",
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#9A1206",
            padding: 10,
            width: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            elevation: 10,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "white",fontSize:20 }}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login Screen</Text>
    </View>
  );
}
const LoginAuth = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default LoginAuth;
