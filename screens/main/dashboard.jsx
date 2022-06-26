import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../../assets/chart1predictive.png")} />
        <Text
          style={{
            padding: 9,
            backgroundColor: "lightgray",
            borderRadius: 9,
            margin: 12,
          }}
        >
          Market Price Prediction
        </Text>
        <Image source={require("../../assets/chart2predictive.png")} />
        <Image
          style={{ margin: 12 }}
          source={require("../../assets/chartDual.png")}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
