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
}

const Header = ({title, left,right}: HeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Box flexDirection='row' justifyContent='space-between' alignItems='center' paddingHorizontal='s' style={{marginTop: insets.top}}>
            <RoundedIconButton
                size={24}
                name={left.icon}
                color='white'
                backgroundColor='secondary'
                onPress={left.onPress}
            />
            <Text variant='header' color="white"> {title.toUpperCase()} </Text>
            <RoundedIconButton
                size={24}
                name={right.icon}
                color='white'
                backgroundColor='secondary'
                onPress={right.onPress}
            />
        </Box>
    )
};
export default Header
