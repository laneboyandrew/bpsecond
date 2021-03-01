import React from "react";
import {Box, useTheme} from "../../components";
import {Image, StyleSheet, View} from "react-native";

interface BackgroundProps {
    footerHeight: number;
}
const Background = ({}: BackgroundProps) => {
    const theme = useTheme();
    return (
        <View style={StyleSheet.absoluteFill}>
            <Box flex={1 / 3} backgroundColor='lightBlue' top={25}>
                <Box flex={1} backgroundColor='background' borderBottomRightRadius='xl'/>
            </Box>
            <Box flex={1 / 3}>
                <Box flex={1} />
                <Box flex={1} backgroundColor="secondary" top={5}/>
                <Image
                    source={require("./assets/background.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                        borderTopLeftRadius: theme.borderRadii.xl,
                        borderBottomRightRadius: theme.borderRadii.xl,
                        top: 25
                    }}
                />
            </Box>
            <Box  flex={1 / 3} backgroundColor='lightBlue'>
            <Box flex={1} backgroundColor="secondary" borderTopLeftRadius='xl' />
            </Box>
        </View>
    );
};
export default Background

