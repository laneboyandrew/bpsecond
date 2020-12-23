import React, {useRef} from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {multiply} from "react-native-reanimated";
import {interpolateColor, onScrollEvent, useValues} from "react-native-redash/lib/module/v1";
import Subslide from "./Subslide"
import Slide, {SLIDE_HEIGHT} from "./Slide"

const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: 75
    }
})

const slides = [
    {
        title: 'Путешествия',
        subtitle: "Путешествуйте",
        description: "Посещайте красивые места вместе с друзьями",
        color: "#BFEAF5"
    },
    {title: 'Красота', subtitle: "Смотрите на карсоту", description: "Много красивых мест", color: "#BFEAF5"},
    {title: 'Отдых', subtitle: "Отдыхайте", description: "Отдыхайте компанией в красивых местах", color: "#BFEAF5"},
    {title: 'Жизнь', subtitle: "Живите", description: "Добавляйте свои координаты", color: "#BFEAF5"}
]
const Onboarding = () => {
    const scroll = useRef<Animated.ScrollView>(null)
    // TODO: ОБНОВИТЬ useValues из-за него не работает скролл между слайдами и скролл футера
    //TODO: Проверить стили кнопки
    const x = useValues(0);
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    {slides.map(({title}, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{title}} />
                    ))}
                </Animated.ScrollView>
            </View>
            <View style={styles.footer}>
                <Animated.View
                    style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}}
                />
                <Animated.View
                    style={[styles.footerContent,
                        {
                            width: width * slides.length,
                            flex: 1,
                            transform: [{ translateX: multiply(x, -1) }],
                        },
                    ]}
                >
                    {slides.map(({subtitle, description}, index) => (

                            <Subslide
                                onPress={() => {
                                    if(scroll.current){
                                        scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true})
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
    )
}

export default Onboarding

