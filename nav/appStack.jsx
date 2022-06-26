import React from "react";
import MyTabBar from "../components/btmTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/home";
import Dashboard from "../screens/main/dashboard";
import Network from "../screens/main/network";
import HomeInfo from "../screens/main/homeInfo";
import NetworkInfo from "../screens/main/networkInfo";
import profile from "../screens/main/profile";
import { Path, Svg } from "react-native-svg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Chat from "../screens/main/Chat";

const HomeStack_ = createNativeStackNavigator();
const DBStack_ = createNativeStackNavigator(); // dashboard
const BottomTab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <HomeStack_.Navigator screenOptions={{headerShown:false}}>
      <HomeStack_.Screen
        options={{ title: "Home", headerShow: false }}
        name="HomeStack"
        component={Home}
      />

      <HomeStack_.Screen
        options={{ title: "Full report", headerShow: false }}
        name="Homeinfor"
        component={HomeInfo}
      />

      <HomeStack_.Screen
        options={{ title: "HandyMan services", headerShow: false }}
        name="Networkinfor"
        component={NetworkInfo}
      />

      <HomeStack_.Screen
        options={{ headerShow: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <HomeStack_.Screen
        options={{ title: "Chat", headerShow: false }}
        name="Chat"
        // children={[]}
        component={Chat}
      />
        <HomeStack_.Screen
        options={{ title: "Chat", headerShow: false }}
        name="Profile"
        // children={[]}
        component={profile}
      />
    </HomeStack_.Navigator>
  );
};

// predictive stack - let me handle the routes
const DBStack = ({ navigation }) => {
  return (
    <DBStack_.Navigator screenOptions={{}}>
      <DBStack_.Screen
        options={{ title: "Predictive", headerShow: false }}
        name="DashboardStack"
        component={Dashboard}
      />
    </DBStack_.Navigator>
  );
};

const AppStack = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Network" component={Network} />
      <BottomTab.Screen name="Predictions" component={DBStack} />
    </BottomTab.Navigator>
  );
};

export default AppStack;
