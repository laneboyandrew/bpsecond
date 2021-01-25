import React from 'react'
import {Box, RoundedIconButton, Text} from "./index";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface HeaderProps {
    left: {
        icon: string;
        onPress: () => void;
    }
    title: string;
    right: {
        icon: string;
        onPress: () => void;
    }
    dark: boolean;
}

const Header = ({title, left,right,dark}: HeaderProps) => {
    const insets = useSafeAreaInsets();
    const color = dark ? "white" : "secondary";
    const backgroundColor = dark ? "secondary" : "lightGrey";

    return (
        <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingHorizontal='s' style={{marginTop: insets.top}}>
            <RoundedIconButton
                size={44}
                iconRatio={0.5}
                name={left.icon}
                onPress={left.onPress}
                {...{color, backgroundColor}}
            />
            <Text variant='header' { ...{color} }> {title.toUpperCase()} </Text>
            <RoundedIconButton
                size={44}
                iconRatio={0.5}
                name={right.icon}
                onPress={right.onPress}
                {...{color, backgroundColor}}
            />
        </Box>
    )
};

Header.defaultProps = {
    dark: false
};
export default Header
