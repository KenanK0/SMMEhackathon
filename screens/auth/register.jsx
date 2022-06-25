import React, { useState, useContext } from "react";
import { Text, SafeAreaView, StyleSheet, ScrollView, View, TouchableOpacity, Animated, Alert, Button } from "react-native";
import { Input, ListItem, Avatar } from "@rneui/themed";
import ContextProv from "../../components/context";
import * as DocumentPicker from 'expo-document-picker';

// import { Dropdown } from 'react-native-material-dropdown';
// import { Dropdown } from 'rn-material-dropdown';

const Register = ({navigation}) => {
  const [data, setData ] = useState({});
  const { user, setUser } = useContext(ContextProv);

  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log('result', result);
    if (!result.cancelled) {
      setData({ ...data, "bsinfor": result, });
    }
  }

  const types = [
    { value: 'Amy Farha', },
    { value: 'Chris Jackson', },
  ]

  return (
    <SafeAreaView style={styles.area} >
      <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} >

        <View style={styles.form} >

          <Input placeholder="Email"
            rightIcon={{type:"font-awesome", name:"email"}}
            onChangeText={ value => setData({...data, "email":value}) }
          />

          <Input placeholder="Company Name"
            rightIcon={{type:"font-awesome", name:"email"}}
            onChangeText={ value => setData({...data, "company":value}) }
          />

          <Input placeholder="Password"
            rightIcon={{type:"font-awesome", name:"email"}}
            onChangeText={ value => setData({...data, "email":value}) }
          />

          <Input placeholder="Confirm Password"
            rightIcon={{type:"font-awesome", name:"email"}}
            onChangeText={ value => setData({...data, "email":value}) }
          />

          <Input placeholder="location"
            rightIcon={{type:"font-awesome", name:"email"}}
            onChangeText={ value => setData({...data, "email":value}) }
          />

          {/* select here */}

          <Input placeholder="Business Type"
            rightIcon={{type:"font-awesome", name:"email"}}
            onChangeText={ value => setData({...data, "bstype":value}) }
          /> 

          <Input placeholder="upload database"
            rightIcon={{type:"font-awesome", name:"email"}}
            onAccessibilityTap={ () => Alert.alert("Ola")  }
          />

          <Button title="File" onPress={() => pickDocument() } />
          
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnText} >Register</Text>
          </TouchableOpacity>


        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}


export default Register;

const styles = StyleSheet.create({
  area: {
    backgroundColor:'pink',
  },
  form : {
    backgroundColor: "pink",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "red",
    paddingVertical: 10,
    width: "70%",
    alignSelf: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
  }


  
})