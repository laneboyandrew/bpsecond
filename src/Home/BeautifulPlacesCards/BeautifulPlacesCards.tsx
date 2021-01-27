import React, {useState} from "react";


interface BeautifulPlacesCardsProps {

}
import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {Box, Header} from "../../components";
import {useTransition} from "react-native-redash/lib/module/v1";
import {interpolate} from "react-native-reanimated";
const cards = [
    {
        index: 3,
    },
    {
        index: 2,
    },
    {
        index: 1,
    },
    {
        index: 0,
    }
]
const BeautifulPlacesCards = ({ navigation }: HomeNavigationProps<"BeautifulPlacesCards">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex = useTransition(currentIndex)
    return (
        <Box flex={1} backgroundColor="white">
            <Header
                title="Карточки мест"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <Box flex={1}>
                <Background />
                {cards.map(
                    ({index}) =>
                        index >= currentIndex && (
                            <Card
                                key={index}
                                position={interpolate(index, {
                                    inputRange: [0, 0.5, 1],
                                    outputRange: [0, 1],
                                })}
                            />
                    ))
                }

            </Box>
        </Box>
    )
};

export default BeautifulPlacesCards;
