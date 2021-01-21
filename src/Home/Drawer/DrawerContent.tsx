import React from "react";
import {Dimensions, Image, StyleSheet} from "react-native";
import {Box, Text} from "../../components";
import DrawerItem, {DrawerItemProps} from "./DrawerItem";
import {theme} from "../../components/Theme";


const {width} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;
const items = [
    {
        icon: "zap",
        label: "BeautifulPlacesCards",
        screen: "BeautifulPlacesCards",
        color: "primary"
    },
    {
        icon: "heart",
        label: "Favourites",
        screen: "FavouritePlaces",
        color: "orange"
    },
    {
        icon: "user",
        label: "Edit",
        screen: "EditPage",
        color: "yellow"
    },
    {
        icon: "clock",
        label: "History",
        screen: "TransHistory",
        color: "pink"
    },
    {
        icon: "settings",
        label: "Settings",
        screen: "NotSettings",
        color: "violet"
    },
    {
        icon: "log-out",
        label: "Logout",
        screen: "Logout",
        color: "secondary"
    },
];

interface DrawerProps {

}

const DrawerContent = () => {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="white">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius='xl'
                    backgroundColor='secondary'
                />
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor='secondary' />
                <Box flex={1} backgroundColor='primary' />
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        backgroundColor='white'
                        borderTopLeftRadius="xl"
                        borderBottomRightRadius='xl'
                        justifyContent='center'
                        padding='xl'
                    >
                        <Box top={-theme.spacing.l} backgroundColor='primary' alignSelf='center' justifyContent='center'  style={{ borderRadius: 50 }} width={100} height={100}/>
                        <Box marginVertical="m">
                        <Text variant='title1' textAlign='center'>Andrey</Text>
                        <Text variant='body' textAlign='center'>andrejgrach@icloud.com</Text>
                        </Box>
                        {items.map(item => (<DrawerItem key={item.screen} {...item}/>))}
                    </Box>
            </Box>
            <Box width={DRAWER_WIDTH} overflow='hidden' height={height * 0.61}>
                <Image  source={require("../../../assets/patterns/1.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                    }}
                />
            </Box>
        </Box>
    )
};
export default DrawerContent

