import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NetworkIcon } from "../components/svgComponents";

const iconSize = 30;
const HomeIcon = ({ color }) => {
  return Platform.OS === "os" ? (
    <Ionicons name="ios-home" size={iconSize} color={color} />
  ) : (
    <Ionicons name="home" size={iconSize} color={color} />
  );
};

const Board = ({ color }) => {
  return Platform.OS === "os" ? (
    <Ionicons name="ios-pie-chart" size={iconSize} color={color} />
  ) : (
    <AntDesign name="piechart" size={iconSize} color={color} />
  );
};

const IconSelector = ({ route, isFocused }) => {
  const color = isFocused ? "#9A1206" : "#fff";
  console.log("Route", route.name);
  switch (route.name) {
    case "Home":
      return <HomeIcon color={color} />;
    case "Network":
      return <NetworkIcon color={color} />;
    case "Dashboard":
      return <Board color={color} />;
    default:
      return null;
  }
};

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#1F376A",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: 65,
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const TabBarIcon = options.tabBarIcon;
        // TabBarIcon.props.color = "#00ff00";

        const isFocused = state.index === index;
        console.log("Focus", isFocused);

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              flexDirection: "column",
              padding: 5,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                backgroundColor: isFocused ? "#fff" : null,
                padding: 5,
                borderRadius: 50,
              }}
            >
              {<IconSelector isFocused={isFocused} route={route} />}
            </Text>
            <Text style={{ color: "#fff" }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
