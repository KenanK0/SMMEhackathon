import React from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView, Pressable, Alert } from "react-native";
import Avatar from "../../assets/Avatar.png";
import { Card } from "@rneui/themed";
import Chart from "../../assets/salesgraphs/Chart.png";
import ChartContent from "../../assets/salesgraphs/Content.png";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff"}} >
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} >

      <View style={styles.container}>

        <View style={styles.header}>
          {/* <Text style={styles.title}>Home</Text> */}
          <Pressable style={{alignItems:"flex-end"}} 
            onPress={() => navigation.navigate("Profile") } >
            <Image source={Avatar} style={styles.avatar} />
          </Pressable>
        </View>


        <Text>Sales</Text>
        <Pressable containerStyle={{ padding: 20 }} onPress={()=>{ navigation.navigate("Homeinfor") }} >
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
        </Pressable>

        <Text>Finance</Text>
        <Card>
          <Card.Title>Quaterly performance</Card.Title>
        </Card>
        <Text>Customer Analytics</Text>
        <Card>
          <Card.Title>Sales this month</Card.Title>
        </Card>
      </View>


    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginHorizontal: 25,
    paddingVertical: 10,
  },
  title: {
    color: "#1F376A",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // backgroundColor:"pink",
  },

  avatar: {
    width: 60,
    height: 60,
    alignSelf:"flex-end",
    alignItems:"flex-end",
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

