import React from "react";
import {Box, Header, useTheme} from "../../components";
import {Dimensions, ScrollView, View} from "react-native";
import {HomeNavigationProps} from "../../components/Navigation";
import Footer from './Footer';
import Picture from './Picture';

const {width: wWidth} = Dimensions.get('window')
const pictures = [
    {
        id: 1,
        color: "#BFEAF5",
        aspectRatio: 1
    },
    {
        id: 2,
        color: "red",
        aspectRatio: 200 / 145
    },
    {
        id: 3,
        color: "green",
        aspectRatio: 150 / 145
    },
    {
        id: 4,
        color: "yellow",
        aspectRatio: 150 / 145
    },
    {
        id: 5,
        color: "orange",
        aspectRatio: 1
    },
    {
        id: 6,
        color: "powderblue",
        aspectRatio: 150 / 145
    },
    {
        id: 7,
        color: "pink",
        aspectRatio: 210 / 145
    },
    {
        id: 8,
        color: "violet",
        aspectRatio: 160 / 145
    },
    {
        id: 9,
        color: "brown",
        aspectRatio: 160 / 145
    },
    {
        id: 10,
        color: "grey",
        aspectRatio: 1
    },
]
const FavouritePlaces = ({navigation}: HomeNavigationProps<"FavouritePlaces">) => {
    const theme = useTheme()
    const width = (wWidth - theme.spacing.m * 3) / 2;
    return (
        <Box flex={1} backgroundColor="white">
            <Header
                title="Избранные места"
                left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
                right={{icon: 'shopping-bag', onPress: () => true}}
            />
            <Box flex={1}>
                <ScrollView contentContainerStyle={{paddingHorizontal: theme.spacing.m}}>
                    <Box flexDirection='row'>
                        <Box marginRight='s'>
                            {pictures.filter((_, i) => i % 2 !== 0).map((picture) => <Picture key={picture.id}
                                                                                              picture={picture}
                                                                                              width={width}/>)}
                        </Box>
                        <Box>
                            {pictures.filter((_, i) => i % 2 === 0).map((picture) => <Picture key={picture.id}
                                                                                              picture={picture}
                                                                                              width={width}/>)}
                        </Box>
                    </Box>
                </ScrollView>
            </Box>

            <Footer label="Больше красивых мест" onPress={() => null}/>
        </Box>
    )
}
export default FavouritePlaces
