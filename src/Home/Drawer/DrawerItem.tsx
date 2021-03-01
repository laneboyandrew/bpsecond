import React from "react";
import {Box, theme, Theme, useTheme} from "../../components/Theme";
import {RoundedIcon, Text} from "../../components";
import {RectButton} from "react-native-gesture-handler";
import {HomeRoutes} from "../../components/Navigation";
import {useNavigation} from "@react-navigation/native";
import {DrawerNavigationProp} from "@react-navigation/drawer/lib/typescript/src/types";

interface BaseDrawerItem {
    icon: string;
    color: keyof Theme["colors"]
    label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}
interface OnPressDrawerItem extends BaseDrawerItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({icon, color, label, ...props}: DrawerItemProps) => {
    const theme = useTheme();
    const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "BeautifulPlacesCards">>();
    return (
        <RectButton
            onPress={() => "screen" in props ? navigation.navigate(props.screen) : props.onPress(navigation)}
            style={{borderRadius: theme.borderRadii.m}}
        >
            <Box flexDirection='row' alignItems='center' padding='s' borderRadius='xl'>
                <RoundedIcon
                    iconRatio={0.5}
                    name={icon}
                    size={36}
                    color="background"
                    backgroundColor={color}
                />
                <Text variant="button" color="secondary">{label}</Text>
            </Box>
        </RectButton>
    )
};

export default DrawerItem;
