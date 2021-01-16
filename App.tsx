import 'react-native-gesture-handler';
import * as React from 'react';
import {assets as authenticationAssets, AuthenticationNavigator,} from "./src/Authentication";
import {LoadAssets, theme} from "./src/components";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const assets = [...authenticationAssets]
const fonts = {
    "SFBold": require("./assets/fonts/SfBold.ttf"),
    "SFSemibold": require("./assets/fonts/SFSemibold.ttf"),
    "SFRegular": require("./assets/fonts/SFRegular.ttf"),
};


export default function App() {
  return (
      <ThemeProvider {...{ theme }}>
      <LoadAssets{ ...{ fonts, assets}}>
          <SafeAreaProvider>
        <AuthenticationNavigator />
          </SafeAreaProvider>
      </LoadAssets>
      </ThemeProvider>
  );
}
