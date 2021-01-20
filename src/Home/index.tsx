import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import BeautifulPlacesCards from "./BeautifulPlacesCards";
import {HomeRoutes} from "../components/Navigation";



const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="BeautifulPlacesCards" component={BeautifulPlacesCards}/>
    </Drawer.Navigator>
);
