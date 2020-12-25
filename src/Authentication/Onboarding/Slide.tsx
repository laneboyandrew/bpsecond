import React from 'react'
import {View, Dimensions, StyleSheet, Image, ImageRequireSource} from 'react-native'
import {Text} from "../../components"

const {width, height} = Dimensions.get("window")
export const SLIDE_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;
const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },

})

interface SlideProps {
    title: string;
    right?: boolean;
}

const Slide = ({right}: SlideProps) => {

    const transform =
        [
            {translateY: (SLIDE_HEIGHT - 100) / 2},
            {translateX: right ? width / 2 - 50 : -width / 2 + 50},
            {rotate: right ? "-90deg" : "90deg"}
        ];
    return (
        <View style={styles.container}>


            {/*Здесь можно вставить текст прямо на картинку*/}

            {/*<View style={[styles.titleContainer, { transform } ]}>*/}
            {/*    <Text variant="title1">{title}</Text>*/}
            {/*</View>*/}
        </View>
    )
}

export default Slide