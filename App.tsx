import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./screens/homeScreen";
import configureStore from "./store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerDetailsScreen from "./screens/customerDetailsScreen";

export type rootStactParams = {
  HomeScreen: undefined;
  CustomerDetailsScreen: { customerId: string } | undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<rootStactParams>();

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
          <Stack.Screen
            name={"CustomerDetailsScreen"}
            component={CustomerDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
