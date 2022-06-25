import React from "react";
import MyTabBar from "../components/btmTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/home";
import Dashboard from "../screens/main/dashboard";
import Network from "../screens/main/network";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const iconSize = 30
const homeIcon = Platform.OS === 'os' ? <Ionicons name="ios-home" size={iconSize} color="black" /> : <Ionicons name="home" size={iconSize} color="black" />
const peopleIcon = Platform.OS ==='os' ? <Ionicons name="ios-people-sharp" size={iconSize} color="black" /> : <Ionicons name="people-sharp" size={iconSize} color="black" />
const board = Platform.OS ==='os' ? <Ionicons name="ios-pie-chart" size={iconSize} color="black"   /> : <AntDesign name="piechart" size={iconSize} color="black" />

// const HomeStack_ = createNativeStackNavigator(); 
const BottomTab = createBottomTabNavigator();


const AppStack = ({navigation}) => {

  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} /> } >
      <BottomTab.Screen name="Home"
        options={{
          tabBarIcon: homeIcon
        }} 
        component={Home} />

      <BottomTab.Screen name="Network" 
        options={{
          tabBarIcon: peopleIcon
        }}
        component={Network} />
      <BottomTab.Screen name="Dashboard"
        options={{
          tabBarIcon: board
        }}
        component={ Dashboard } />
    </BottomTab.Navigator>
  )
}

export default AppStack;