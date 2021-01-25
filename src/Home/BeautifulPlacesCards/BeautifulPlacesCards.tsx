import React from "react";
import {View, Text} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";
import {Box, Header} from "../../components";
import {HomeNavigationProp} from "../../components/Navigation";
import { DrawerActions } from "@react-navigation/native";
import {Background} from "./index";


interface BeautifulPlacesCardsProps {

}

const BeautifulPlacesCards = ({ navigation }: HomeNavigationProp<"BeautifulPlacesCards">) => {
    return (
        <Box>
            <Header
                title='Подборка мест'
                left={{icon: "menu", onPress: () => navigation.dispatch(DrawerActions.openDrawer)}}
                right={{icon: "shopping-bag", onPress: () => true}}
            />
            <Box flex={1}>
                <Background />
            </Box>
        </Box>
    )
};

export default BeautifulPlacesCards;
