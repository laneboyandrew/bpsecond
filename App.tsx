import 'react-native-gesture-handler';
import * as React from 'react';
import {assets as authenticationAssets, AuthenticationNavigator} from "./src/Authentication";
import {LoadAssets} from "./src/components";
import {ThemeProvider} from "./src/components/Theme"
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeNavigator} from "./src/Home";
import {AppRoutes} from "./src/components/Navigation";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";
import {useFonts} from "@use-expo/font";
import AppContext from './src/components/AppContext';
import {useState} from "react";

const AppStack = createStackNavigator<AppRoutes>();

const assets = [...authenticationAssets];


const customFonts = {
    PTSerifRegular: require("./assets/fonts/PTSerif-Regular.ttf"),
    PTSerifBold: require("./assets/fonts/PTSerif-Bold.ttf"),
    PTSerifBoldItalic: require("./assets/fonts/PTSerif-BoldItalic.ttf"),
    PTSerifItalic: require("./assets/fonts/PTSerif-Italic.ttf"),
};

export default function App() {
    useFonts(customFonts);
    const [allPlaces, setAllPlaces] = useState();
    const getPlaces = () => {
        return allPlaces
    }
    const updatePlaces = (json) => {
        setAllPlaces(json)
    }
    const placesSettings = {
        getPlaces,
        updatePlaces
    }
    return (
        <AppContext.Provider value={placesSettings}>
            <ThemeProvider>
                <LoadAssets{...{assets}}>
                    <SafeAreaProvider>
                        <AppStack.Navigator headerMode="none">
                            {/*<AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>*/}
                            <AppStack.Screen name="Home" component={HomeNavigator}/>
                        </AppStack.Navigator>
                    </SafeAreaProvider>
                </LoadAssets>
            </ThemeProvider>
        </AppContext.Provider>
    );
}
// filteredData Array [
//     Array [
//         Object {
//     "coordinates": Object {
//         "latitude": "54.336576",
//             "longitude": "51.123220",
//     },

// filteredData Array [
//     Object {
//     "coordinates": Object {
//         "latitude": "53.435288",
//             "longitude": "49.757053",
//     },

