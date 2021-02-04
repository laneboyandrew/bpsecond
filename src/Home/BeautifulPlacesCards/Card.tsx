import React from "react";
import {Dimensions, ImageRequireSource, StyleSheet} from "react-native";
import Animated, {add, Extrapolate, interpolate} from "react-native-reanimated";
import {Box} from "../../components";
import {mix} from "react-native-redash";
import {PanGestureHandler} from "react-native-gesture-handler";
import {usePanGestureHandler} from "react-native-redash/lib/module/v1";
import {useSpring} from "./Animations";


const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.7;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
    position: Animated.Node<number>;
    onSwipe: () => void;
    source: ImageRequireSource;
    step: number;
}

const Card = ({position, onSwipe, source, step}: CardProps) => {
    const {gestureHandler, translation, velocity, state} = usePanGestureHandler()
    const backgroundColor = Animated.interpolateColors(position, {
        inputRange: [0, 1],
        outputColorRange: ['#C9E9E7', '#74BCB8']
    })
        const translateYOffset = mix(position, 0, -50)
        const scale = mix(position, 1, 0.9);
        const imageScale = interpolate(position, {
            inputRange: [0, step],
            outputRange: [1, 0.8],
            extrapolate: Extrapolate.CLAMP,
        })
        const translateX = useSpring({
            value: translation.x,
            velocity: velocity.x,
            state,
            snapPoints: [-wWidth, 0, width],
            onSnap: ([x]) => x !== 0 && onSwipe(),
        })
        const translateY = add(
            translateYOffset,
            useSpring({
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
                        transform: [{translateY}, {translateX}, {scale}],
                        overflow: 'hidden'
                    }}
                >
                    <Animated.Image {...{source}} style={{ ...StyleSheet.absoluteFillObject, width: undefined, height: undefined }} />
                </Animated.View>
            </PanGestureHandler>
        </Box>
    )
};

export default Card;
