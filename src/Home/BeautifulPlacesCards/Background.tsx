import React from "react";
import {Box, useTheme} from "../../components";
import {Image, StyleSheet, View} from "react-native";
import {palette} from "../../components/Theme";

interface BackgroundProps {
    footerHeight: number;
}
const Background = ({}: BackgroundProps) => {
    const theme = useTheme();
    return (
        <View style={StyleSheet.absoluteFill}>
            <Box flex={1 / 3} style={{ backgroundColor: palette.black }}  top={25}>
                <Box flex={1} backgroundColor='drawer7' borderBottomRightRadius='xl'/>
            </Box>
            <Box backgroundColor="drawer7" flex={1 / 3}>
                <Box flex={1} backgroundColor="drawer7" />
                <Box flex={1} backgroundColor="drawer7" top={5}/>
                {/*<Image*/}
                {/*    source={require("./assets/background.png")}*/}
                {/*    style={{*/}
                {/*        ...StyleSheet.absoluteFillObject,*/}
                {/*        width: undefined,*/}
                {/*        height: undefined,*/}
                {/*        borderTopLeftRadius: theme.borderRadii.xl,*/}
                {/*        borderBottomRightRadius: theme.borderRadii.xl,*/}
                {/*        top: 25*/}
                {/*    }}*/}
                {/*/>*/}
            </Box>
            <Box  flex={1 / 3} backgroundColor='drawer7'>
            <Box flex={1} backgroundColor="drawer7" borderTopLeftRadius='xl' />
            </Box>
        </View>
    );
};
export default Background

