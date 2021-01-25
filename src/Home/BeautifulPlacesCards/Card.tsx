import React from "react";
import {StyleSheet, Dimensions} from "react-native";
import Animated, {interpolate} from "react-native-reanimated";
import {Box} from "../../components";
import {interpolateColor} from "react-native-redash/lib/typescript/v1";



const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.8;
const height = width * (294 / 425);
interface CardProps {
    position: Animated.Adaptable<number>;
}
const Card = ({ position }: CardProps) => {
    const backgroundColor = interpolate(position, {inputRange: [0, 1],
        outputRange:["#C9E9E7" , "#74BCB8"]
    });
    return (
        <Box
            style={StyleSheet.absoluteFill}
            justifyContent="center"
            alignItems="center"
        >
            <Animated.View style={{ backgroundColor, width, height }}/>
        </Box>
    )
};

export default Card;
