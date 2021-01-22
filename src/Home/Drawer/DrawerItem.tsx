import React from "react";
import {Box, theme, Theme, useTheme} from "../../components/Theme";
import {RoundedIcon, Text} from "../../components";
import {RectButton} from "react-native-gesture-handler";

export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"]
    screen: string;
    label: string;
}

const DrawerItem = ({icon, color, screen, label}: DrawerItemProps) => {
    const theme = useTheme();
    return (
        <RectButton style={{ borderRadius: theme.borderRadii.m }}>
            <Box flexDirection='row' alignItems='center' padding='s' borderRadius='xl'>
                <RoundedIcon
                    iconRatio={0.5}
                    name={icon}
                    size={36}
                    color="white"
                    backgroundColor={color}
                />
                <Text variant="button" color="secondary">{label}</Text>
            </Box>
        </RectButton>
    )
};

export default DrawerItem;
