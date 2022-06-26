import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Button,
} from "react-native";
import { Divider } from "@rneui/themed";

const NetworkInfo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={styles.container}>
          <Image
            style={styles.center}
            source={require("../../assets/businesses/business3.jpg")}
            resizeMethod="auto"
          />
          <Button
            title="Contact us"
            onPress={() => navigation.navigate("Chat")}
          />
          <Text style={styles.text}>
            Handy Man is a private and management owned company with a culture
            of loyalty and service, supported by our highly skilled and
            experienced management team and workforce, we are able to provide
            our clients with a hands-on approach to understanding and meeting
            their needs with superior and sustainable property solutions.
          </Text>
          <Text style={{ color: "#293462", fontWeight: "bold", fontSize: 25 }}>
            Our services
          </Text>
        </View>
        <View style={styles.services}>
          <View style={styles.service}>
            <Image
              style={styles.serviceimg}
              source={require("../../assets/businesses/plumber.png")}
              resizeMethod="auto"
            />
            <View style={styles.serviceText}>
              <Text style={{ fontWeight: "bold" }}>Plumber</Text>
              <Text>From R115</Text>
              {/* <Text>Kenan K</Text> */}
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.service}>
            <Image
              style={styles.serviceimg}
              source={require("../../assets/businesses/gardening.png")}
              resizeMethod="auto"
            />
            <View style={styles.serviceText}>
              <Text style={{ fontWeight: "bold" }}>Gardening</Text>
              <Text>From R90</Text>
              {/* <Text>Kenan K</Text> */}
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.service}>
            <Image
              style={styles.serviceimg}
              source={require("../../assets/businesses/electrician.png")}
              resizeMethod="auto"
            />
            <View style={styles.serviceText}>
              <Text style={{ fontWeight: "bold" }}>Electrician</Text>
              <Text>From R75</Text>
              {/* <Text>Kenan K</Text> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NetworkInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  center: {
    marginTop: 10,
    marginBottom: 10,
    width: "95%",
    height: 300,
  },
  text: {
    marginTop: 10,
    width: "87%",
    color: "#293462",
    fontWeight: "bold",
    lineHeight: 23,
  },
  services: {
    margin: 10,
    alignItems: "flex-start",
  },
  serviceimg: {
    width: 80,
    height: 80,
  },
  service: {
    flexDirection: "row",
  },
  serviceText: {
    marginLeft: 10,
    justifyContent: "space-evenly",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
    marginTop: 10,
    marginBottom: 10,
  },
});
