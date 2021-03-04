import React from 'react'
import {View, Dimensions, StyleSheet, ImageRequireSource} from 'react-native'

const {width, height} = Dimensions.get("window");
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
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    }

})

interface SlideProps {
    title: string;
    right?: boolean;
    picture: {
        src: ImageRequireSource,
    }
}

const Slide = ({ }: SlideProps) => {

    return (
        <View style={styles.container}>
            {/*Здесь можно вставить текст прямо на картинку*/}
        </View>
    )
}

export default Slide
