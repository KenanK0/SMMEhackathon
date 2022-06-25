import { Text, SafeAreaView, ScrollView } from "react-native";


const HomeInfo = ({navigation}) => {


  return (
    <SafeAreaView >
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} >
        <Text >Home Info </Text> 
      </ScrollView>
    </SafeAreaView>
  )
}


export default HomeInfo;