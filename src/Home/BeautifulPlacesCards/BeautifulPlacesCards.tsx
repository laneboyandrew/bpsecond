import React from "react";


interface BeautifulPlacesCardsProps {

}
import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {Box, Header} from "../../components";

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
                <Card position={1} />
                <Card position={0.5} />
                <Card position={0} />
            </Box>
        </Box>
    )
};

export default BeautifulPlacesCards;
