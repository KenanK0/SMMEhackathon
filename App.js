import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContextProv from './components/context';
import Routes from './nav/routes';

export default function App() {
  const [ user, setUser ] = useState(false);

  return (
    <ContextProv.Provider value={{user, setUser}} >
      <Routes />
    </ContextProv.Provider>
  );
}
