import {createText, createBox} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";
import {useTheme as useReTheme} from '@shopify/restyle';

export const theme = ({
    colors: {
        primary: "#2CB9B0",
        secondary: "#0C0D34",
        danger: "#FF0058",
        text: "rgba(12, 13, 52, 0.7)",
        white: "white",
        grey: "rgba(12, 13, 52, 0.05)",
        "slide.grey": "#F4F0EF",
        darkGrey: "#8A8D90",
        primaryLight: "#E7F9F7",
        orange: "orange",
        pink: "pink",
        yellow: "yellow",
        violet: "violet",
        lightGrey: "#FAFAFA",
        lightBlue: "#BFEAF5",
        lightSeaGreen: "#20B2AA"


    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },
    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: "SFProText-Bold",
            color: "white",
            textAlign: "center"
        },
        title1: {
            fontSize: 28,
            fontFamily: "SFProText-SemiBold",
            color: "secondary"
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: "SFProText-SemiBold",
            color: "secondary"
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: "SFProText-SemiBold",
            color: "text"
        },
        button: {
            fontSize: 15,
            fontFamily: "SFProText-Medium",
            color: "text"
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: "SFProText-SemiBold",
            color: "secondary"
        }
    },
    breakpoints: {}

});


export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();


export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};


