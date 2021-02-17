import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import BeautifulPlacesCards from "./BeautifulPlacesCards";
import {HomeRoutes} from "../components/Navigation";
import DrawerContent, {DRAWER_WIDTH} from "./Drawer/DrawerContent";
import FavouritePlaces from "./FavouritePlaces";
import TravelsHistory from "../TravelsHistory/TravelsHistory";



const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}
                      drawerStyle={{
                          width: DRAWER_WIDTH,
                      }}>
        <Drawer.Screen name="BeautifulPlacesCards" component={BeautifulPlacesCards}/>
        <Drawer.Screen name="FavouritePlaces" component={FavouritePlaces} />
        <Drawer.Screen name="TravelsHistory" component={TravelsHistory} />
    </Drawer.Navigator>
);
