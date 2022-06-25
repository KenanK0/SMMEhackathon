import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const iconSize = 30
const homeIcon = Platform.OS === 'os' ? <Ionicons name="ios-home" size={iconSize} color="black" /> : <Ionicons name="home" size={iconSize} color="black" />
const peopleIcon = Platform.OS ==='os' ? <Ionicons name="ios-people-sharp" size={iconSize} color="black" /> : <Ionicons name="people-sharp" size={iconSize} color="black" />
const board = Platform.OS ==='os' ? <Ionicons name="ios-pie-chart" size={iconSize} color="black"   /> : <AntDesign name="piechart" size={iconSize} color="black" />

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon_= options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
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
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, flexDirection:'column', padding: 5, alignItems:"center", }}
          >
            <Text > { icon_ } </Text>
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default MyTabBar;