import React from "react";
import {Dimensions, Image, StyleSheet, Text as RNText} from "react-native";
import {Box, Header, RoundedIcon, RoundedIconButton, Text, useTheme} from "../../components";
import DrawerItem, {DrawerItemProps} from "./DrawerItem";
import {theme} from "../../components/Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {CommonActions, DrawerActions, useNavigation } from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";



const {width, height} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const mHeight = DRAWER_WIDTH * aspectRatio;
const items = [
    {
        icon: "map",
        label: "Карта",
        screen: "Map",
        color: "drawer7"
    },
    {
        icon: "zap",
        label: "Список мест",
        screen: "BeautifulPlacesCards",
        color: "drawer7"
    },
    {
        icon: "heart",
        label: "Избранные места",
        screen: "FavouritePlaces",
        color: "drawer7"
    },
    // {
    //     icon: "user",
    //     label: "Профиль",
    //     screen: "EditProfile",
    //     color: "drawer3"
    // },
   /* {
        icon: "clock",
        label: "История путешествий",
        screen: "TravelsHistory",
        color: "drawer4"
    },
     */
    // {
    //     icon: "settings",
    //     label: "Settings",
    //     screen: "NotSettings",
    //     color: "drawer5"
    // },
    // {
    //     icon: "log-out",
    //     label: "Logout",
    //     onPress: (navigation) => navigation.dispatch(CommonActions.reset({
    //         index: 0,
    //         routes: [
    //             { name: 'Authentication' }
    //
    //         ]
    //     })),
    //     color: "drawer7"
    // },
];

interface DrawerProps {

}

const DrawerContent = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <Box flex={1}>
            <Box flex={0.21}
                 backgroundColor="newViolet"
            >
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius='xl'
                    backgroundColor='newViolet'
                >
                <Header
                    left={{ icon: 'x', onPress: () => navigation.dispatch(DrawerActions.closeDrawer) }}
                    dark
                />
                    <RNText style={{
                        color: 'white',
                        alignSelf: 'center',
                        fontWeight: "bold",
                        fontSize: 27,
                        fontFamily: "PTSerifBoldItalic",
                        textAlign: "center",
                        maxWidth: '75%'
                    }}> Красивые места России </RNText>
            </Box>
            </Box>
            <Box flex={0.8} backgroundColor='newViolet'>
                <Box flex={1} backgroundColor='newViolet' />
                    <LinearGradient
                        colors={['#051345', '#fa3c01']}
                        style={{  position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'mainMenu2',
                            borderTopLeftRadius: "xl",
                            padding: 10,
                        }}>

                        {/*<Box*/}
                        {/*    position="absolute"*/}
                        {/*    top={-50}*/}
                        {/*    left={DRAWER_WIDTH / 2 - 50}*/}
                        {/*    right={0}*/}
                        {/*    backgroundColor='primary'*/}
                        {/*    style={{ borderRadius: 50 }}*/}
                        {/*    width={100}*/}
                        {/*    height={100}*/}
                        {/*/>*/}

                        {/*<Box marginVertical='m'>*/}
                        {/*<Text marginTop='l' variant='title1' textAlign='center'>Andrey</Text>*/}
                        {/*<Text variant='body' textAlign='center'>andrejgrach@icloud.com</Text>*/}
                        {/*</Box>*/}
                        {items.map(item => (
                            <DrawerItem key={item.icon} {...item}/>)
                        )}
                    </LinearGradient>

            </Box>

            {/*<Box width={DRAWER_WIDTH} overflow='hidden' height={mHeight * 0.61}>*/}
            {/*    <Image  source={require("../../../assets/patterns/1.png")}*/}
            {/*        style={{*/}
            {/*            ...StyleSheet.absoluteFillObject,*/}
            {/*            width: undefined,*/}
            {/*            height: undefined,*/}
            {/*            borderTopLeftRadius: theme.borderRadii.xl,*/}
            {/*            borderTopRightRadius: theme.borderRadii.xl*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</Box>*/}
        </Box>
    )
};


export default DrawerContent

