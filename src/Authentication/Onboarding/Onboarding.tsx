import React, {useRef} from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {divide, multiply} from "react-native-reanimated";
import {interpolateColor, onScrollEvent, useValues} from "react-native-redash/lib/module/v1";
import Subslide from "./Subslide"
import Slide, {SLIDE_HEIGHT, BORDER_RADIUS} from "./Slide"
import Dot from "./Dot"
import {useScrollHandler} from "react-native-redash/lib/module/v1";


const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: BORDER_RADIUS,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})

const slides = [
    {
        title: 'Путешествия',
        subtitle: "Путешествуйте",
        description: "Посещайте красивые места вместе с друзьями",
        color: "#BFEAF5",
        picture: require("./../../../assets/introduceImages/1.jpg")
    },
    {
        title: 'Красота',
        subtitle: "Смотрите на карсоту",
        description: "Много красивых мест",
        color: "orange",
        picture: require("./../../../assets/introduceImages/2.jpg")
    },
    {
        title: 'Отдых',
        subtitle: "Отдыхайте",
        description: "Отдыхайте компанией в красивых местах",
        color: "powderblue",
        picture: require("./../../../assets/introduceImages/3.jpg")
    },
    {
        title: 'Жизнь',
        subtitle: "Живите",
        description: "Добавляйте свои координаты",
        color: "red",
        picture: require("./../../../assets/introduceImages/4.jpg")
    }
]
const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    // TODO: ОБНОВИТЬ useValues из-за него не работает скролл между слайдами и скролл футера
    //TODO: Проверить стили кнопки
    const {scrollHandler, x} = useScrollHandler()
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({title,picture}, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
                    ))}
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <Animated.View
                    /*TODO: Add different colors per slide below*/
                    style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}}
                />
                <View style={styles.footerContent}
                >
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot key={index} currentIndex={divide(x, width)} {...{index, x}} />))}
                    </View>
                    <Animated.View style={
                    {
                        flex: 1,
                        flexDirection: "row",
                        width: width * slides.length,
                        transform: [{translateX: multiply(x, -1)}],
                    }
                    }>
                        {slides.map(({subtitle, description}, index) => (

                                <Subslide
                                    onPress={() => {
                                        if (scroll.current) {
                                            scroll.current.getNode().scrollTo({x: width * (index + 1), animated: true})
                                        }
                                    }}
                                    key={index}
                                    last={index === slides.length - 1}
                                    {...{subtitle, description}}/>
                            )
                        )
                        }

                    </Animated.View>

                </View>
            </View>
        </View>
    )
}

export default Onboarding

