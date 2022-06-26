import { Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";





const Dashboard = ({navigation}) => {

  return(
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >
        <Text >Predictive Screen </Text> 
      </ScrollView>
    </SafeAreaView>
  )
} 


export default Dashboard;