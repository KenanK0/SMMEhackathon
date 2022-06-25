import React from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native-paper";
import ContextProv from "../components/context";
import {
  FacebookIcon,
  AppleIcon,
  GoogleIcon,
} from "../components/customSvgIcon";
import Register from "../screens/auth/register";

import DefaultImage from "./icon.png";

const stack = createNativeStackNavigator();

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
          <Text style={{ color: "white", fontSize: 20 }}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const { setUser } = React.useContext(ContextProv);

  const handleSubmit = () => {
    console.log("email:", email);
    console.log("password:", password);
    setUser(true);
    // navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: DEFAULT_IMAGE }}
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
      />
      <Text
        style={{
          color: "#1F376A",
          fontSize: 35,
        }}
      >
        PocketBA
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#1F376A",
          width: "85%",
          height: "55%",
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 10,
          paddingHorizontal: 25,
          backgroundColor: "#1F376A",
        }}
      >
        <Text style={{ fontSize: 30, color: "white", margin: 15 }}>Login</Text>
        <View
          style={{
            display: "flex",
            width: "100%",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <TextInput
            theme={{
              colors: {
                primary: "#1F376A",
                text: "#1F376A",
              },
            }}
            underlineColor="transparent"
            label="Email"
            style={styles.input}
            right={<TextInput.Icon name="email" />}
          />

          <TextInput
            theme={{
              colors: {
                primary: "#1F376A",
                text: "#1F376A",
              },
            }}
            underlineColor="transparent"
            style={styles.input}
            label="Password"
            secureTextEntry={show}
            right={
              <TextInput.Icon
                name={show ? "eye" : "eye-off"}
                onPress={() => {
                  setShow((show) => !show);
                  console.log("show:", show);
                }}
              />
            }
          />
          <Text
            style={{
              color: "#00E0FF",
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
              width: "100%",
              textAlign: "right",
            }}
          >
            Forgot Password ?
          </Text>
          <Pressable
            style={{
              marginTop: 20,

              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handleSubmit()}
          >
            <Text
              style={{
                color: "white",
                width: 150,
                backgroundColor: "#9A1206",
                elevation: 10,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                padding: 10,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Text
            style={{
              paddingTop: 10,
              color: "#fff",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Don't have an account ?
          </Text>
          <Pressable
            style={{
              marginTop: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{
                color: "#9A1206",
                width: 150,
                backgroundColor: "#fff",
                elevation: 10,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                padding: 10,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          width: "50%",
          height: 50,
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <GoogleIcon />
        <AppleIcon />
        <FacebookIcon />
      </View>
    </View>
  );
}
const LoginAuth = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default LoginAuth;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    marginBottom: 10,
    height: 55,
  },
});
