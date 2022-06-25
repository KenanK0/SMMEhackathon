import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Avatar from "../../assets/Avatar.png";
import { Card } from "@rneui/themed";
import Chart from "../../assets/salesgraphs/Chart.png";
import ChartContent from "../../assets/salesgraphs/Content.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>

        <Image source={Avatar} style={styles.avatar} />
      </View>
      <Text>Sales</Text>
      <Card containerStyle={{ padding: 20 }}>
        <Card.Title>Sales this month</Card.Title>
        <View style={styles.align}>
          <Card.Image style={styles.ChartImg} source={Chart} />
        </View>
        <Card.Image style={styles.contentimg} source={ChartContent} />
        <View style={styles.align}>
          <Text>You have made R12 250 this month.</Text>
          <Text> Top selling dishes : </Text>
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Pap & steak Wors Roll Chakalaka{" "}
          </Text>
        </View>
      </Card>

      <Text>Finance</Text>
      <Card>
        <Card.Title>Quaterly performance</Card.Title>
      </Card>
      <Text>Customer Analytics</Text>
      <Card>
        <Card.Title>Sales this month</Card.Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    margin: 25,
  },
  title: {
    color: "#1F376A",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },

  avatar: {
    width: 60,
    height: 60,
  },
  ChartImg: {
    width: 150,
    height: 150,
  },
  contentimg: {
    marginTop: 20,
    height: 70,
    width: "100%",
  },
  align: {
    marginVertical: 5,
    alignItems: "center",
  },
});

export default Home;
