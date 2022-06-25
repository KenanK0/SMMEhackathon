import React from "react";
import { Text, Image } from "react-native";
import Register from "../screens/auth/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultImage from "./icon.png";

const stack = createNativeStackNavigator();

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const Stack = createNativeStackNavigator();

function Welcome({ navigation }) {
  return (
    <stack.Navigator >
      <stack.Screen name="Register" component={Register} />
    </stack.Navigator>
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
