import React from "react";
import {StyleSheet, Dimensions} from "react-native";
import Animated, {add} from "react-native-reanimated";
import {Box} from "../../components";
import {mix} from "react-native-redash";
import {PanGestureHandler} from "react-native-gesture-handler";
import {usePanGestureHandler, withSpring} from "react-native-redash/lib/module/v1";
import {useTransition} from "react-native-redash/lib/typescript/v1";


const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.7;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
    position: Animated.Node<number>;
    onSwipe: () => void;
}

const Card = ({position, onSwipe}: CardProps) => {
    const {gestureHandler, translation, velocity, state} = usePanGestureHandler()
    const backgroundColor = Animated.interpolateColors(position, {
        inputRange: [0, 1],
        outputColorRange: ['#C9E9E7', '#74BCB8']
    })
        const translateYOffset = mix(position, 0, -50)
        const scale = mix(position, 1, 0.9);
        const translateX = withSpring({
            value: translation.x,
            velocity: velocity.x,
            state,
            snapPoints: [-width, 0, width],
            onSnap: ([x]) => x !== 0 && onSwipe(),
        })
        const translateY = add(
            translateYOffset,
            withSpring({
                value: translation.y,
                velocity: velocity.y,
                state,
                snapPoints: [0]
            })
        )
    return (
        <Box
            style={StyleSheet.absoluteFill}
            justifyContent="center"
            alignItems="center"
        >
            <PanGestureHandler {...gestureHandler}>
                <Animated.View
                    style={{
                        backgroundColor,
                        width,
                        height,
                        borderRadius,
                        transform: [{translateY}, {translateX}, {scale}]
                    }}
                />
            </PanGestureHandler>
        </Box>
    )
};

export default Card;
