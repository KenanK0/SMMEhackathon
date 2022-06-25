import React, { useContext } from "react";
import ContextProv from "../components/context";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appStack";
import LoginAuth from "./auth";

const Routes = ( {navigation} ) => {
  const { user, setUser } = useContext( ContextProv );
  
  return (
    <NavigationContainer >
      { user ? <AppStack /> : <LoginAuth /> }
    </NavigationContainer>
  )
}

export default Routes;