
import { createText, createBox } from '@shopify/restyle'

const theme = ({
    colors: {
        primary: "#2CB9B0",
        secondary: "#0C0D34",
        danger: "#FF0058",
        text: "rgba(12, 13, 52, 0.7)",
        white: "white",
        grey: "rgba(12, 13, 52, 0.05)",
        "slide.grey": "#F4F0EF",
        darkGrey: "#8A8D90"
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
        }
    },
    breakpoints: {}

});



export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
