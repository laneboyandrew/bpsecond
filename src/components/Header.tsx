import React from 'react'
import {Box, RoundedIconButton, Text} from "./index";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {View} from "react-native";
import {StatusBar} from "expo-status-bar";

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    }
    title: string;
    right?: {
        icon: string;
        onPress: () => void;
    }
    dark: boolean;
}


const Header = ({title, left, right, dark}: HeaderProps) => {

    const insets = useSafeAreaInsets();
    const color = dark ? "background" : "secondary";
    const backgroundColor = dark ? "transparent" : undefined;

    return (

        <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingHorizontal='s'
             style={{marginTop: insets.top}}>

            <RoundedIconButton
                size={44}
                iconRatio={0.5}
                name={left.icon}
                onPress={left.onPress}
                align={backgroundColor === undefined ? "flex-start" : "center"}

                {...{color}}
            />
            {title ? <Text variant='header' {...{color}}> {title.toUpperCase()} </Text> : undefined}

            {right ? (
                <RoundedIconButton
                    size={44}
                    iconRatio={0.5}
                    name={right.icon}
                    onPress={right.onPress}
                    align={backgroundColor === undefined ? "flex-end" : "center"}
                    {...{color, backgroundColor}}
                />
            ) : (
                <View style={{ width: 44 }}/>
            )}
        </Box>
    )
};

export default Header
