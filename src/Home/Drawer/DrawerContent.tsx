import React from "react";
import {Dimensions, Image, StyleSheet} from "react-native";
import {Box, Header, RoundedIcon, RoundedIconButton, Text, useTheme} from "../../components";
import DrawerItem, {DrawerItemProps} from "./DrawerItem";
import {theme} from "../../components/Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {CommonActions, DrawerActions, useNavigation } from "@react-navigation/native";



const {width, height} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const mHeight = DRAWER_WIDTH * aspectRatio;
const items = [
    {
        icon: "map",
        label: "Map",
        screen: "Map",
        color: "drawer1"
    },
    {
        icon: "zap",
        label: "BeautifulPlacesCards",
        screen: "BeautifulPlacesCards",
        color: "drawer1"
    },
    {
        icon: "heart",
        label: "Favourites",
        screen: "FavouritePlaces",
        color: "drawer2"
    },
    {
        icon: "user",
        label: "Профиль",
        screen: "EditProfile",
        color: "drawer3"
    },
   /* {
        icon: "clock",
        label: "История путешествий",
        screen: "TravelsHistory",
        color: "drawer4"
    },
     */
    {
        icon: "settings",
        label: "Settings",
        screen: "NotSettings",
        color: "drawer5"
    },
    {
        icon: "log-out",
        label: "Logout",
        onPress: (navigation) => navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Authentication' }

            ]
        })),
        color: "drawer7"
    },
];

interface DrawerProps {

}

const DrawerContent = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <Box flex={1}>
            <Box flex={0.2}
                 backgroundColor="background"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius='xl'
                    backgroundColor='secondary'
                >
                <Header
                    title='Профиль'
                    left={{ icon: 'x', onPress: () => navigation.dispatch(DrawerActions.closeDrawer) }}
                    right={{ icon: 'shopping-bag', onPress: () => true }}
                    dark
                />

            </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor='secondary' />
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        backgroundColor='background'
                        borderTopLeftRadius="xl"
                        justifyContent='center'
                        padding='s'
                    >

                        <Box
                            position="absolute"
                            top={-50}
                            left={DRAWER_WIDTH / 2 - 50}
                            right={0}
                            backgroundColor='primary'
                            style={{ borderRadius: 50 }}
                            width={100}
                            height={100}
                        />

                        <Box marginVertical='m'>
                        <Text marginTop='l' variant='title1' textAlign='center'>Andrey</Text>
                        <Text variant='body' textAlign='center'>andrejgrach@icloud.com</Text>
                        </Box>
                        {items.map(item => (
                            <DrawerItem key={item.icon} {...item}/>)
                        )}
                    </Box>

            </Box>

            <Box width={DRAWER_WIDTH} overflow='hidden' height={mHeight * 0.61}>
                <Image  source={require("../../../assets/patterns/1.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: theme.borderRadii.xl,
                        borderTopRightRadius: theme.borderRadii.xl
                    }}
                />
            </Box>
        </Box>
    )
};


export default DrawerContent

