import React from "react";
import {StyleSheet, View, Dimensions} from "react-native";
import Animated from "react-native-reanimated";
import {Box} from "../../components";
import {mixColor} from "react-native-redash";

const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (294 / 425)
interface CardProps {
    position: Animated.Adaptable<number>
}
const Card = ({ position }: CardProps) => {
    const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8")
    return (
        <Box
            style={StyleSheet.absoluteFill}
            justifyContent="center"
            alignItems="center"
        >
            <Animated.View style={{ backgroundColor, width, height }}/>
        </Box>
    )
}

export default Card;