import React from "react";
import {View, Text} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";

interface BeautifulPlacesCardsProps {

}

const BeautifulPlacesCards = ({navigation}: DrawerNavigationProp<"BeautifulPlacesCards">) => {
    return (
        <View>
    <Text> "BPCards" </Text>
        </View>
        )
};

export default BeautifulPlacesCards;
