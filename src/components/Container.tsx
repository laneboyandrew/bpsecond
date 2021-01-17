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
}

export const assets = [require("./../../assets/patterns/1.png")];
const Container = ({children, footer}: ContainerProps) => {
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    return (
        <KeyboardAwareScrollView scrollEnabled={false }>
            <Box height={WHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)} backgroundColor="secondary">
                <Box backgroundColor="white">
                    <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
                        <Image source={assets[0]}
                               style={{width, height, borderBottomLeftRadius: theme.borderRadii.xl}}/>
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">

                    <Image source={assets[0]} style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.61
                    }}/>
                    <Box borderRadius="xl" borderTopLeftRadius={0} backgroundColor="white" flex={1}>
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
