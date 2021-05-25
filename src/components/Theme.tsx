import React, {ReactNode} from "react";
import {createText, createBox} from '@shopify/restyle'
import {ImageStyle, TextStyle, ViewStyle} from "react-native";
import {useTheme as useReTheme, ThemeProvider as ReStyleThemeProvider} from '@shopify/restyle';

export const palette = {
    white: "white",
    orange: "orange",
    green: "#2CB9B0",
    yellow: "#EBE538",
    lightBlue: "#BFEAF5",
    pink: 'pink',
    violet: 'violet',
    black: 'black',
}
const theme = ({
    colors: {
        mainMenu: 'black',
        mainMenu2: '#FFFFFF',
        transparent: 'rgba(52, 52, 52, 0.8)',
        primary: palette.green,
        secondary: "#0C0D34",
        danger: "#FF0058",
        text: "rgba(12, 13, 52, 0.7)",
        background: palette.white,
        background2: "rgba(12, 13, 52, 0.05)",
        "slide.grey": "#F4F0EF",
        info: "#8A8D90",
        primaryLight: "#E7F9F7",
        orange: palette.orange,
        pink: palette.pink,
        yellow: palette.yellow,
        violet: palette.violet,
        lightBlue: palette.lightBlue,
        lightSeaGreen: "#20B2AA",
        january: "#5492B3",
        february: "#062CB3",
        march: '#B3B118',
        april: '#7CB800',
        may: '#E05038',
        june: '#F01F01',
        july: '#FA0801',
        august: '#F0023E',
        september: '#4DBD00',
        october: '#BD8709',
        november: '#E06812',
        december: '#6765BD',
        drawer1: palette.green,
        drawer2: palette.violet,
        drawer3: palette.orange,
        drawer4: palette.pink,
        drawer5: palette.yellow,
        drawer6: palette.lightBlue,
        drawer7: palette.black,
        newViolet: '#051345',
        newOrange: '#fa3c01'
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
            color: "mainMenu2",
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
        title3: {
            fontSize: 16,
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
            fontSize: 18,
            fontFamily: "SFProText-Medium",
            color: "text",
            fontFamily: 'PTSerifRegular'
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: "SFProText-SemiBold",
            color: "secondary"
        }
    },
    breakpoints: {
        phone: 0,
        tablet: 768
    }

});

export const ThemeProvider = ({children}: {children: ReactNode}) => (
    <ReStyleThemeProvider{...{ theme }}>
        {children}
    </ReStyleThemeProvider>
)

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


