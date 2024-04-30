import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/homeScreen";
import configureStore from "./store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import customerDetailsScreen from "./screens/customerDetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
          <Stack.Screen
            name={"customerDetailsScreen"}
            component={customerDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
