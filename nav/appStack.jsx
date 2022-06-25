import React from "react";
import MyTabBar from "../components/btmTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/home";
import Dashboard from "../screens/main/dashboard";
import Network from "../screens/main/network";
import HomeInfo from "../screens/main/homeInfo";
import { Path, Svg } from "react-native-svg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const HomeStack_ = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


const HomeStack = ({navigation}) => {

  return (
    <HomeStack_.Navigator screenOptions={{headerShown:false }} >
      <HomeStack_.Screen options={{ headerShow:false }}
        name="HomeStack" component={Home} />

      <HomeStack_.Screen options={{ headerShow:false }}
        name="Homeinfor" component={HomeInfo} />
    </HomeStack_.Navigator>
  )
}

const AppStack = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({})} >

      <BottomTab.Screen name="Home" component={HomeStack} />
      <BottomTab.Screen name="Network" component={Network} />
      <BottomTab.Screen name="Dashboard" component={Dashboard} />
    </BottomTab.Navigator>
  );
};

export default AppStack;
