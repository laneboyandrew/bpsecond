import 'react-native-gesture-handler';
import * as React from 'react';
import {assets as authenticationAssets, AuthenticationNavigator} from "./src/Authentication";
import {LoadAssets} from "./src/components";
import { ThemeProvider } from "./src/components/Theme"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeNavigator} from "./src/Home";
import {AppRoutes} from "./src/components/Navigation";




const AppStack = createStackNavigator<AppRoutes >();


const assets = [...authenticationAssets];
const fonts = {
    "SFBold": require("./assets/fonts/SfBold.ttf"),
    "SFSemibold": require("./assets/fonts/SFSemibold.ttf"),
    "SFRegular": require("./assets/fonts/SFRegular.ttf"),
};


export default function App() {
  return (
      <ThemeProvider>
      <LoadAssets{ ...{ fonts, assets}}>
          <SafeAreaProvider>
              <AppStack.Navigator headerMode="none">
                  <AppStack.Screen name="Authentication" component={AuthenticationNavigator} />
                  <AppStack.Screen name="Home" component={HomeNavigator} />
              </AppStack.Navigator>
          </SafeAreaProvider>
      </LoadAssets>
      </ThemeProvider>
  );
}
