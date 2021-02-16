import React, {useState} from "react";
import Categories from "./Categories"

interface BeautifulPlacesCardsProps {

}
import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {Box, Header} from "../../components";
import {useTransition} from "react-native-redash/lib/module/v1";

const cards = [
    {
        index: 3,
        source: require("../../../assets/introduceImages/4.jpg")
    },
    {
        index: 2,
        source: require("../../../assets/introduceImages/3.jpg")
    },
    {
        index: 1,
        source: require("../../../assets/introduceImages/2.jpg")
    },
    {
        index: 0,
        source: require("../../../assets/introduceImages/1.jpg")
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
            <Categories />
            <Box flex={1}>

                <Background />
                {/*Using without interpolate until Reanimated 2 update */}
                {cards.map(
                    ({index, source}) =>
                        currentIndex < index * step + step && (
                            <Card
                                key={index}
                                position={0}
                                // position={sub(index * step, aIndex)}
                                // position={interpolate(index, {
                                //     inputRange: [aIndex, cards.length - 1],
                                //     outputRange: [0, 1]
                                // })}
                                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                                {...{ source, step }}
                            />
                    ))
                }
                {/*<Card position={1} />*/}
                {/*<Card position={0.5} />*/}
                {/*<Card position={0} />*/}
            </Box>
        </Box>
    )
};

export default BeautifulPlacesCards;
