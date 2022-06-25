import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as Location from "expo-location";
import Geocode from "react-geocode";
import { FontAwesome } from "@expo/vector-icons";
import construction from "../../assets/businesses/construction.png";
import business2 from "../../assets/businesses/business21.jpg";
import business3 from "../../assets/businesses/business3.jpg";
import business4 from "../../assets/businesses/business4.jpg";
import business5 from "../../assets/businesses/business5.jpg";


import { Card } from "@rneui/themed";

const Network = ({ navigation }) => {
  const [address, setAddress] = useState(null);
  Geocode.setApiKey("AIzaSyAoVkDzEvO0dYt364M48LXN_QziRN3-lhQ");

  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");

  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      setLoading(true);
      Location.getCurrentPositionAsync({}).then((e) => {
        setLocation(e);
        Geocode.fromLatLng(e.coords.latitude, e.coords.longitude).then(
          (response) => {
            setAddress(response.results[0].formatted_address);
            setLoading(false);
          }
        );
      });
    setLocation(userlocation);
    setLoading(false);
    console.log(location);
    Geocode.fromLatLng(
      location.coords.latitude,
      location.coords.longitude
    ).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        setAddress(address);
      },
      (error) => {
        console.error(error);
      }
    );
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading && (
        <ActivityIndicator style={styles.container} size="large" color="blue" />
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
      {location && (
        <View>
          <Text style={[styles.title, styles.center]}>
            Search Businesses near you
          </Text>
          <View style={styles.flex}>
            <Entypo name="location-pin" size={24} color="red" />
            <Text style={styles.center}>{address}</Text>
          </View>
          <View style={styles.flex}>
            <TextInput
              style={styles.input}
              placeholder="Business name, service.."
            />
            <FontAwesome name="search" size={24} color="blue" />
          </View>
          <Text style={styles.title}>Nearest</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              transform: [{ scaleX: -1 }],
            }}
          >
            <View style={styles.businessContainer}>
              <View style={styles.card}>
                <Image style={styles.img} source={business3} />
              </View>
              <View style={styles.card}>
                <Image style={styles.img} source={business2} />
              </View>
              <View style={styles.card}>
                <Image style={styles.img} source={construction} />
              </View>
            </View>
          </ScrollView>
          <Text style={styles.title}>All</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
           
          >
            <View style={styles.businessContainer}>
              <View style={styles.card}>
                <Image style={styles.img} source={business4} />
              </View>
              <View style={styles.card}>
                <Image style={styles.img} source={business5} />
              </View>
              <View style={styles.card}>
                <Image style={styles.img} source={construction} />
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};

export default Network;

const styles = StyleSheet.create({
  // scroll: {
  //   height : 600,
  // },
  container: {
    flex: 1,
   
    marginHorizontal: 9,
    marginVertical: 65,
  },
  title: {
    color: "#1F376A",
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
  center: {
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 9,
    borderColor: "lightgray",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  businessContainer: {
    marginVertical: 12,
    flexDirection: "row",
  },
  card: {
    borderRadius: 9,
    marginHorizontal: 4,
    borderColor: "lightgray",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  img: {
    borderRadius: 9,

    width: 300,
    height: 300,
    // resizeMode: "auto",
  },
});
