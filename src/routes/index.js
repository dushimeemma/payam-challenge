import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BusinessAccountSettings from "../screens/BusinessAccountSettings";
import Header from "../components/Header";
import colors from "../config/colors";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BusinessAccountSettingsScreen"
        screenOptions={{
          headerShown: true,
          headerTintColor: colors.faded,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Stack.Screen
          name="BusinessAccountSettingsScreen"
          component={BusinessAccountSettings}
          options={{
            headerTitle: (props) => (
              <Header
                leftIcon="left"
                rightIcon="settings"
                title="Business account setup"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
