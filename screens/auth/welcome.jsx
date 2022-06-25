import react, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

export default function ({ navigation, DEFAULT_IMAGE }) {
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
          onPress={() => {
            console.log("pressed:", navigation);
            navigation.navigate("Login");
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
}
