import React from "react";
import MyTabBar from "../components/btmTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/main/home";
import Dashboard from "../screens/main/dashboard";
import Network from "../screens/main/network";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack_ = createNativeStackNavigator(); 
const BottomTab = createBottomTabNavigator();


// const HomeStack = ({navigation}) => {

//   return (
//     <HomeStack_.Navigator >
//       <HomeStack_.Screen name="Home" component={Home} />
//       <HomeStack_.Screen name="Dashboard" component={ Dashboard } />
//       <HomeStack_.Screen name="Network" component={Network} />
//     </HomeStack_.Navigator>
//   )
// }


const AppStack = ({navigation}) => {

  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} /> } >
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Dashboard" component={ Dashboard } />
      <BottomTab.Screen name="Network" component={Network} />
    </BottomTab.Navigator>
  )
}

export default AppStack;