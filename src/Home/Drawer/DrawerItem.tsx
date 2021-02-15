import React from "react";
import {Box, theme, Theme, useTheme} from "../../components/Theme";
import {RoundedIcon, Text} from "../../components";
import {RectButton} from "react-native-gesture-handler";
import {HomeRoutes} from "../../components/Navigation";
import {useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";

export interface DrawerItemProps {
    icon: string;
    color: keyof Theme["colors"]
    screen: keyof HomeRoutes;
    label: string;
}

const DrawerItem = ({icon, color, screen, label}: DrawerItemProps) => {
    const theme = useTheme();
    const { navigate } = useNavigation<DrawerNavigationProp<HomeRoutes, "BeautifulPlacesCards">>();
    return (
        <RectButton
            onPress={() => navigate(screen)}
            style={{borderRadius: theme.borderRadii.m}}
        >
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
