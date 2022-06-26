import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import Avatar from "../../assets/Avatar.png";
import { Card } from "@rneui/themed";
import Chart from "../../assets/salesgraphs/Chart.png";
import ChartContent from "../../assets/salesgraphs/Content.png";
import ChartContentFinance from "../../assets/salesgraphs/ContentFinance.png";
import ChartContentClients from "../../assets/salesgraphs/ContentClient.png"

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 20 }}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Home</Text>
            <Pressable
              style={{ alignItems: "flex-end" }}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image source={Avatar} style={styles.avatar} />
            </Pressable>
          </View>

          <Pressable
            style={styles.card}
            onPress={() => {
              navigation.navigate("Homeinfor");
            }}
          >
            <Text style={{ paddingHorizontal: 10 }}>Sales</Text>
            <Card.Title>Sales this month</Card.Title>
            <View style={styles.align}>
              <Card.Image style={styles.ChartImg} source={Chart} />
            </View>
            <Card.Image style={styles.contentImg} source={ChartContent} />
            <View style={styles.align}>
              <Text>You have made R12 250 this month.</Text>
              <Text> Top selling dishes </Text>
              <Text style={{ fontWeight: "bold" }}>
                Pap and steak Wors Roll Chakalaka{" "}
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("Homeinfor")}
          >
            <Text style={{ paddingHorizontal: 10 }}>Finance</Text>
            <Card.Title>Quarterly performance</Card.Title>
            <View style={styles.align}>
              <Card.Image style={styles.ChartImg} source={ChartContentFinance} />
            </View>
            <Card.Image style={styles.contentImg} source={ChartContent} />
            <View style={styles.align}>
              {/* <Text>You have made R12 250 this month.</Text>
              <Text> Top selling dishes </Text>
              <Text style={{ fontWeight: "bold" }}>
                Pap and steak Wors Roll Chakalaka{" "}
              </Text> */}
            </View>
          </Pressable>

          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("Homeinfor")}
          >
            <Text style={{ paddingHorizontal: 10 }}>Customer Analytics</Text>
            <Card.Title>Your customer engagement</Card.Title>
            <View style={styles.align}>
              <Card.Image style={styles.ChartImg} source={ChartContentClients} />
            </View>
            <Card.Image style={styles.contentImg} source={ChartContent} />
            <View style={styles.align}>
              {/* <Text>You have made R12 250 this month.</Text>
              <Text> Top selling dishes </Text>
              <Text style={{ fontWeight: "bold" }}>
                Pap and steak Wors Roll Chakalaka{" "}
              </Text> */}
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: "#1F376A",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  ChartImg: {
    width: 200,
    height: 200,
  },
  contentImg: {
    marginTop: 20,
    height: 70,
    width: "100%",
  },
  align: {
    marginVertical: 5,
    alignItems: "center",
  },
  // card
  card: {
    // borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    elevation: 4,
  },
});
