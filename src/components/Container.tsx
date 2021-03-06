import React, {ReactNode} from "react";
import {Dimensions, Image, Platform, StyleSheet} from "react-native";
import {Box} from "./Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useTheme} from "@shopify/restyle";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Constants from 'expo-constants';


const {width, height: WHeight} = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern: 0 | 1 | 2;
}

export const assets = [
    require("./../../assets/patterns/1.png"),
    require("./../../assets/patterns/1.png"),
    require("./../../assets/patterns/1.png")
];
const Container = ({children, footer, pattern}: ContainerProps) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const asset = assets[pattern];
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={WHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)}
                 backgroundColor="secondary">
                <Box backgroundColor="background">
                    <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
                        <Image source={asset}
                               style={{width, height, borderBottomLeftRadius: theme.borderRadii.xl}}/>
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">

                    <Image source={asset}
                           style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.61
                    }}/>
                    <Box
                        borderRadius="xl"
                        backgroundColor="background"
                        flex={1}
                        justifyContent='center'
                        padding='xl'
                    >
                        {children}
                    </Box>
                </Box>
                <Box backgroundColor="secondary">
                    {footer}
                    <Box height={insets.bottom}/>
                </Box>
            </Box>
        </KeyboardAwareScrollView>

    )
};
export default Container;
