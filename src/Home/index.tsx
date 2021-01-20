import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import BeautifulPlacesCards from "./BeautifulPlacesCards";



const Drawer = createDrawerNavigator();
export const HomeNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="BeautifulPlacesCards" component={BeautifulPlacesCards}/>
    </Drawer.Navigator>
);
