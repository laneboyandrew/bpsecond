import React, {useState} from "react";


interface BeautifulPlacesCardsProps {

}
import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {Box, Header} from "../../components";
import {useTransition} from "react-native-redash/lib/module/v1";
import {sub} from "react-native-reanimated";

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

const step = 1/(cards.length - 1);
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
                {/*Using without interpolate until Reanimated 2 update */}
                {cards.map(
                    ({index}) =>
                        currentIndex < index * step + step && (

                            <Card
                                key={index}
                                position={1}
                                // position={sub(index * step, aIndex)}
                                // position={interpolate(index, {
                                //     inputRange: [aIndex, cards.length - 1],
                                //     outputRange: [0, 1]
                                // })}
                                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                            />
                    ))
                }
                <Card position={1} />
                <Card position={0.5} />
                <Card position={0} />
            </Box>
        </Box>
    )
};

export default BeautifulPlacesCards;
