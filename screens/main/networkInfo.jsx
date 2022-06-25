import { Text, SafeAreaView, ScrollView } from "react-native";


const NetworkInfo = ({navigation}) => {


  return (
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >
        <Text >Network Info </Text> 
      </ScrollView>
    </SafeAreaView>
  )
}


export default NetworkInfo;