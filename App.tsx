import 'react-native-gesture-handler';
import * as React from 'react';
import {assets as authenticationAssets, AuthenticationNavigator} from "./src/Authentication";
import {LoadAssets} from "./src/components";
import { ThemeProvider } from "./src/components/Theme"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeNavigator} from "./src/Home";
import {AppRoutes} from "./src/components/Navigation";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";
import {useFonts} from "@use-expo/font";

const AppStack = createStackNavigator<AppRoutes >();

const assets = [...authenticationAssets];


const customFonts = {
    PTSerifRegular: require("./assets/fonts/PTSerif-Regular.ttf"),
    PTSerifBold: require("./assets/fonts/PTSerif-Bold.ttf"),
    PTSerifBoldItalic: require("./assets/fonts/PTSerif-BoldItalic.ttf"),
    PTSerifItalic: require("./assets/fonts/PTSerif-Italic.ttf"),
};

export default function App() {
    useFonts(customFonts);
    return (
      <ThemeProvider>
      <LoadAssets{...{assets}}>
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
