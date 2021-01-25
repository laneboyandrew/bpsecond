import React from "react";
import {View, StyleSheet} from "react-native";
import {Box} from "../../components";

const Background = () => {
    return (
        <View style={StyleSheet.absoluteFill}>
            <Box flex={1 / 3} backgroundColor='lightBlue'>
                <Box flex={1} backgroundColor="white" borderBottomRightRadius='xl' />
            </Box>
            <Box flex={1 / 3}></Box>
            <Box flex={1 / 3}></Box>
        </View>
    )
};

export default Background;
