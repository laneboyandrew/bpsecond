import React, {useRef} from "react";
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Animated, {divide, Extrapolate, interpolate, multiply} from "react-native-reanimated";
import {useScrollHandler} from "react-native-redash/lib/module/v1";
import Subslide from "./Subslide"
import Slide, {SLIDE_HEIGHT} from "./Slide"
import Dot from "./Dot"
import {useTheme} from "../../components";
import {AuthenticationRoutes, StackNavigationProps} from "../../components/Navigation";
import {makeStyles, Theme} from "../../components/Theme";






const {width, height} = Dimensions.get("window");
const useStyles = makeStyles((theme: Theme) => ({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: theme.borderRadii.xl
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",

    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: theme.borderRadii.xl,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: "flex-end",
        borderBottomRightRadius: theme.borderRadii.xl,
        overflow: "hidden"
    }
}));

const slides = [
    {
        title: 'Путешествия',
        subtitle: "Путешествуйте",
        description: "Посещайте красивые места вместе с друзьями",
        color: "#BFEAF5",
        picture: {
            ...StyleSheet.absoluteFillObject,
            src: require("./../../../assets/introduceImages/1.jpg"),

        },
    },
    {
        title: 'Красота',
        subtitle: "Смотрите на карсоту",
        description: "Много красивых мест",
        color: "orange",
        picture: {
            src: require("./../../../assets/introduceImages/2.jpg"),

        },
    },
    {
        title: 'Отдых',
        subtitle: "Отдыхайте",
        description: "Отдыхайте компанией в красивых местах",
        color: "powderblue",
        picture: {
            src: require("./../../../assets/introduceImages/3.jpg"),

        },
    },
    {
        title: 'Жизнь',
        subtitle: "Живите",
        description: "Добавляйте свои координаты",
        color: "red",
        picture: {
            src: require("./../../../assets/introduceImages/4.jpg"),

        },
    }
];
export const assets = slides.map((slide) => slide.picture.src);
const Onboarding = ({navigation}: StackNavigationProps<AuthenticationRoutes, "Onboarding">) => {
    const styles = useStyles();

    const theme = useTheme();
    const scroll = useRef<Animated.ScrollView>(null)
    // TODO: ОБНОВИТЬ useValues из-за него не работает скролл между слайдами и скролл футера
    const {scrollHandler, x} = useScrollHandler()
    return (
        <Animated.View style={styles.container}>
            <Animated.View style={[styles.slider]}>
                {
                    slides.map(({picture}, index) => {
                            const opacity = interpolate(x, {
                                inputRange: [
                                    (index - 1) * width,
                                    index * width,
                                    (index + 1) * width
                                ],
                                outputRange: [0, 1, 0],
                                extrapolate: Extrapolate.CLAMP
                            })
                            return (
                                <Animated.View style={[styles.underlay, {opacity}]} key={index}>
                                    <Image source={picture.src}
                                           style={{
                                               width: width,
                                               height: height / 1.6
                                           }}/>
                                </Animated.View>)
                        }
                    )
                }

                <Animated.ScrollView
                    ref={scroll}
                    horizontal snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    {...scrollHandler}
                >
                    {slides.map(({title, picture}, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{title, picture}} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
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
                        {slides.map(({subtitle, description}, index) => {
                            const last = index === slides.length - 1;
                                return (
                                    <Subslide
                                        onPress={() => {
                                            if (last){
                                                navigation.navigate("Welcome");
                                            } else {
                                                scroll.current
                                                    ?.getNode()
                                                    .scrollTo({x: width * (index + 1), animated: true})
                                            }
                                        }}
                                        key={index}
                                        {...{subtitle, description, last}}/>
                                )
                            }
                        )
                        }

                    </Animated.View>

                </View>
            </View>
        </Animated.View>
    )
}

export default Onboarding

