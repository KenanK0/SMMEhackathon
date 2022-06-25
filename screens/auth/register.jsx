import React, { useState, useContext } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Animated,
  Alert,
  Button,
  Image,
} from "react-native";
import { Input, ListItem, Avatar } from "@rneui/themed";
import ContextProv from "../../components/context";
import * as DocumentPicker from "expo-document-picker";
//icons
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
// import { Dropdown } from 'react-native-material-dropdown';
// import { Dropdown } from 'rn-material-dropdown';

const Register = ({ navigation }) => {
  const [data, setData] = useState({});
  const { user, setUser } = useContext(ContextProv);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log("result", result);
    if (!result.cancelled) {
      setData({ ...data, bsinfor: result });
    }
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 20 }}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 200,
            }}
            source={require("../../assets/icon.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              color: "#fff",
              alignSelf: "center",
              paddingTop: 2,
            }}
          >
            Pocket BA{" "}
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            placeholder="Email"
            rightIcon={<MaterialIcons name="email" size={24} color="black" />}
            onChangeText={(value) => setData({ ...data, email: value })}
          />

          <Input
            placeholder="Company Name"
            rightIcon={<Ionicons name="business" size={24} color="black" />}
            onChangeText={(value) => setData({ ...data, company: value })}
          />

          <Input
            placeholder="Password"
            rightIcon={<MaterialIcons name="lock" size={24} color="black" />}
            onChangeText={(value) => setData({ ...data, email: value })}
          />

          <Input
            placeholder="Confirm Password"
            rightIcon={
              <MaterialCommunityIcons
                name="lock-open-check"
                size={24}
                color="black"
              />
            }
            onChangeText={(value) => setData({ ...data, email: value })}
          />

          <Input
            placeholder="location"
            rightIcon={
              <MaterialIcons name="location-on" size={24} color="black" />
            }
            onChangeText={(value) => setData({ ...data, email: value })}
          />

          {/* select here */}

          <Input
            placeholder="Business Type"
            rightIcon={<SimpleLineIcons name="graph" size={24} color="black" />}
            onChangeText={(value) => setData({ ...data, bstype: value })}
          />

          {/* <Input placeholder="upload database"
            rightIcon={{type:"font-awesome", name:"email"}}
            onAccessibilityTap={ () => Alert.alert("Ola")  }
          /> */}

          <View style={styles.file_}>
            <TouchableOpacity
              style={styles.filebtn}
              onPress={() => pickDocument()}
            >
              <Text style={styles.btnText}>Upload Database</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              setUser(true);
            }}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  area: {
    backgroundColor: "#1F376A",
    flex: 1,
    // paddingBottom: 15,
  },
  form: {
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "90%",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#9A1206",
    paddingVertical: 10,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "uppercase",
  },
  file_: {
    width: "80%",
    alignSelf: "center",
    marginBottom: 30,
  },
  filebtn: {
    backgroundColor: "grey",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
});
