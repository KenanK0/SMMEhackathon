import React from "react";
import MyTabBar from "../components/btmTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/home";
import Dashboard from "../screens/main/dashboard";
import Network from "../screens/main/network";
import { Path, Svg } from "react-native-svg";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";




// const HomeStack_ = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const AppStack = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={({ route }) => ({
        // tabBarIcon: ({focused,color,size}) => {
        //   console.log("ICON:",color)
        //   return <NetworkIcon color="#ff0000" />;
        // },
      })}
    >
      <BottomTab.Screen
        name="Home"
        options={{
          headerShown : false,
          // tabBarIcon: <HomeIcon color="#ff0000" />,
        }}
        component={Home}
      />

      <BottomTab.Screen
        name="Network"
        options={{
          headerShown: false,
          // tabBarIcon: <NetworkIcon color="#ff0000" />,
        //  title: "",
         
        }}
        component={Network}
      />
      <BottomTab.Screen
        name="Dashboard"
        // options={{
        //   tabBarIcon: <Board color="#ff0000" />,
        // }}
        component={Dashboard}
      />
    </BottomTab.Navigator>
  );
};

export default AppStack;
