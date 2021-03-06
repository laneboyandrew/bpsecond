import React, {ReactNode} from "react";
import {RectButton, RectButtonProperties} from "react-native-gesture-handler";
import {Text, StyleSheet} from "react-native";
import {useTheme} from "./Theme";

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
    },

});

interface ButtonProps {
    variant: "default" | "primary" | "vkontakte";
    label: string;
    onPress: () => void;
    style?: RectButtonProperties["style"];
}


const Button = ({variant, label, onPress, style}: ButtonProps) => {
    const theme = useTheme();
    // TODO: Make switch/case if one more variant.
    //Если вариант кнопки главный то фон главный если прозрачный прозрачный в другом случае серый
    const backgroundColor = variant === "primary" ? theme.colors.primary : variant === "vkontakte" ? "#597da3" : theme.colors.background2;
    const color = variant === "primary" || variant === 'vkontakte' ? theme.colors.background : theme.colors.secondary;
    return (
        <RectButton style={[styles.container, style, {backgroundColor}]} {...{onPress}}>
                <Text variant="button" style={{color}}>
                    {label}
                </Text>
        </RectButton>
    )
};

Button.defaultProps = {variant: "default"};

export default Button;
