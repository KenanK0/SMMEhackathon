import { Text, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const HomeInfo = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Financial Analysis</Text>
          <Text style={styles.title2}>Imbizo Shisanyama</Text>
          <Text style={styles.title3}>
            Detailed Ratio Analysis - Two-Year Comparison
          </Text>
          <Text>
            Liquidity ratios measure a company’s ability to meet its maturing
            short-term obligations. In other words, can a company quickly
            convert its assets to cash without a loss in value if necessary to
            meet its short-term obligations? Favorable liquidity ratios are
            critical to a company and its creditors within a business or
            industry that does not provide a steady and predictable cash flow.
            They are also a key predictor of a company’s ability to make timely
            payments to creditors and to continue to meet obligations to lenders
            when faced with an unforeseen event.
          </Text>
          <Text style={styles.title2}>Current Ratio</Text>
          <Text>Current Assets / Current Liabilities</Text>
          <Text>
            This ratio reflects the number of times short-term assets cover
            short-term liabilities and is a fairly accurate indication of a
            company's ability to service its current obligations. A higher
            number is preferred because it indicates a strong ability to service
            short-term obligations. The composition of current assets is a key
            factor in the evaluation of this ratio. Depending on the type of
            business or industry, current assets may include slow-moving
            inventories that could potentially affect analysis of a company's
            liquidity how long could it potentially take to convert raw
            materials and inventory into finished products? (For this reason,
            the quick ratio may be preferable to the current ratio because it
            eliminates inventory and prepaid expenses from this ratio for a more
            accurate gauge of a company's liquidity and ability to meet
            short-term obligations.)
          </Text>
          <Text>
            The current ratio for Imbizo Shisanyama is 0.74, which compared to
            the baseline of 0.72 indicates the company's ability to service
            short-term obligations is satisfactory. However the value of the
            quick ratio will provide a clearer indication of the company's
            success in this area.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  title: {
    fontSize: 20,
    color: "#1F376A",
    fontWeight: "bold",
    marginVertical: 8,
  },
  title2: {
    fontSize: 15,
    color: "#1F376A",
    fontWeight: "bold",
    marginVertical: 8,
  },
  title3: {
    fontSize: 15,
    color: "#1F376A",
    fontWeight: "bold",
    // margin: 8,
  },
});
