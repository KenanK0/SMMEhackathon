import React, { useContext } from "react";
import ContextProv from "../components/context";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appStack";
import LoginAuth from "./auth";


// for testing purposes
import Profile from "../screens/main/profile";


const Routes = ( {navigation} ) => {
  const { user, setUser } = useContext( ContextProv );
  
  return (
    <NavigationContainer >
      {/* <Profile /> */}
      { user ? <AppStack /> : <LoginAuth /> }
    </NavigationContainer>
  )
}

export default Routes;