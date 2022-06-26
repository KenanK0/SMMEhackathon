import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import { useContext } from "react";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DefaultImage from "./icon.png";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import ContextProv from "../../components/context";

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

function Profile({ navigation }) {
  const { user, setUser } = useContext(ContextProv);
  const settings = [
    {
      name: "Account",
      icon: <MaterialIcons name="account-circle" size={38} color="black" />,
      route: "Account",
      subText: "Privacy, security, change email or number",
    },
    {
      name: "Update Database",
      icon: <Entypo name="database" size={38} color="black" />,
      route: "UpdateDatabase",
      subText: "Add a database,Update your database",
    },
    {
      name: "Report Analysis",
      icon: <AntDesign name="barchart" size={38} color="black" />,
      route: "ReportAnalysis",
      subText: "Sales, Finance, Customer Satisfaction",
    },
    {
      name: "Dashboard",
      icon: <AntDesign name="dashboard" size={38} color="black" />,
      route: "Dashboard",
      subText: "Manage your metrics",
    },
    {
      name: "Help",
      icon: <Entypo name="help-with-circle" size={38} color="black" />,
      route: "Help",
      subText: "Help centre, contact us, faq, privacy policy",
    },
    {
      name: "Invite a business",
      icon: <MaterialIcons name="add-business" size={38} color="black" />,
      route: "InviteBusiness",
      subText: "Invite a business to join your network",
    },
  ];

  return (
    // <SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: DEFAULT_IMAGE }}
          style={{
            padding: 20,
            width: 80,
            height: 80,
            resizeMode: "contain",
          }}
        ></Image>
        <View style={{ flex: 10, margin: 10 }}>
          <Text style={styles.companyName}>Imbizo shisanyama</Text>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-globe-outline" size={24} color="lightgray" />
            <Text
              style={{
                fontStyle: "italic",
                color: "lightgrey",
                marginLeft: 10,
              }}
            >
              www.imbizoshisanyama.co.za
            </Text>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {settings.map((item, index) => (
          <View key={index} style={styles.setting}>
            <View style={styles.settingIcon}>{item.icon}</View>
            <View style={styles.settingText}>
              <Text style={styles.settingTextName}>{item.name}</Text>
              <Text style={styles.settingTextSub}>{item.subText}</Text>
            </View>
          </View>
        ))}
        <Pressable
          style={{
            marginTop: 20,
            // width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 40,
            backgroundColor: "#9A1206",
            flexDirection: "row",
            marginHorizontal: 100,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 8,
            padding: 10,
          }}
          onPress={() => {
            setUser(false);
            console.log(user);
          }}
        >
          <Text
            style={{
              color: "#fff",
              alignItems: "center",
            }}
          >
            Log out
          </Text>
          <AntDesign
            style={{ marginLeft: 10 }}
            name="logout"
            size={24}
            color="white"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    // flexDirection: "row",
    paddingVertical: 20,
    paddingLeft: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: "30%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1F376A",
  },
  companyName: {
    flex: 8,
    fontSize: 30,
    color: "#fff",
  },
  scrollView: {
    flex: 8,
  },
  mainContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 42,
  },
  setting: {
    backgroundColor: "#f3f3f3",
    margin: 10,
    marginBottom: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  settingIcon: {
    flex: 2,
    paddingLeft: 10,
  },
  settingText: {
    flex: 9,
    paddingLeft: 10,
  },
  settingTextName: {
    fontSize: 20,
    color: "#121212",
  },
  settingTextSub: {
    // fontsize: 14,
    color: "#9A1206",
    fontStyle: "italic",
  },
});

export default Profile;
