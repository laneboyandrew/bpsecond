import React from "react";
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";
import {Box, Header} from "../../components";
import { useNavigation } from "@react-navigation/native";
import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";

const BeautifulPlacesCards = ({ navigation }: HomeNavigationProps<"BeautifulPlacesCards">) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Header
                title="Карточки мест"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <Box flex={1}>
                <Background />
                <Card position='1' />
                <Card position='1' />
                <Card position='1' />
            </Box>
        </Box>
    )
};

export default BeautifulPlacesCards;
