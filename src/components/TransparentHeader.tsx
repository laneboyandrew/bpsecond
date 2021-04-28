import React from 'react'
import {Box, RoundedIconButton, Text} from "./index";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {View} from "react-native";

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    }
    right?: {
        icon: string;
        onPress: () => void;
    }
    dark: boolean;
}

const TransparentHeader = ({left, right, dark}: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? "background" : "secondary";
    const backgroundColor = dark ? "secondary" : undefined;

    return (
        <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingHorizontal='s'
             style={{marginTop: insets.top, backgroundColor: 'transparent'}}>
            <RoundedIconButton
                size={44}
                iconRatio={0.5}
                name={left.icon}
                onPress={left.onPress}
                align={backgroundColor === undefined ? "flex-start" : "center"}

                {...{color, backgroundColor}}
            />
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
}

export default TransparentHeader
