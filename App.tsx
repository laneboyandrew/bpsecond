import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Onboarding, Welcome } from "./src/Authentication";
import {LoadAssets, theme} from "./src/components";
import { ThemeProvider } from "@shopify/restyle";

const fonts = {
    "SFBold": require("./assets/fonts/SfBold.ttf"),
    "SFSemibold": require("./assets/fonts/SFSemibold.ttf"),
    "SFRegular": require("./assets/fonts/SFRegular.ttf"),
};
const AuthenticationStack = createStackNavigator()
const AuthenticationNavigator = () => {
  return (
      <AuthenticationStack.Navigator headerMode="none">
  <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  <AuthenticationStack.Screen name="Welcome" component={Welcome} />
  </AuthenticationStack.Navigator>)
}

export default function App() {
  return (
      <ThemeProvider {...{ theme }}>
      <LoadAssets{ ...{ fonts}}>
        <AuthenticationNavigator />
      </LoadAssets>
      </ThemeProvider>
  );
}