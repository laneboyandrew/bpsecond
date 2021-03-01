import React, {useState} from "react";
import Categories from "./Categories"

import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {Box, Header} from "../../components";

import {Dimensions, PixelRatio} from "react-native";

const cards = [
    {
        index: 4,
        source: require("../../../assets/introduceImages/4.jpg")
    },
    {
        index: 3,
        source: require("../../../assets/introduceImages/3.jpg")
    },
    {
        index: 2,
        source: require("../../../assets/introduceImages/2.jpg")
    },
    {
        index: 1,
        source: require("../../../assets/introduceImages/1.jpg")
    }
]
const footerHeight = PixelRatio.roundToNearestPixel(Dimensions.get("window").width / 3.3)
const step = 1/(cards.length - 1);
const BeautifulPlacesCards = ({ navigation }: HomeNavigationProps<"BeautifulPlacesCards">) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Box flex={1} backgroundColor="background">
            <Header
                title="Карточки мест"
                left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                right={{ icon: 'shopping-bag', onPress: () => true }}
            />
            <Categories />
            <Box flex={1}>
                <Background {...{footerHeight}} />
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
