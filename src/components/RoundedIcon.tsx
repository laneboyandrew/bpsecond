import React from "react";
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Theme, Text} from "./Theme";


interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme['colors'];
    backgroundColor: keyof Theme['colors'] | undefined;
    iconRatio: number;
    align: "center" | "flex-start" | "flex-end"
}
const RoundedIcon = ({
                         name,
                         size,
                         color,
                         backgroundColor,
                         iconRatio,
                         align
    }: RoundedIconProps) => {
    const iconSize = size * iconRatio;
    return(
        <Box paddingRight='s'>
            <Box
                height={size}
                width={size}
                borderRadius='xl'
                justifyContent='center'
                alignItems={align}
                {...{ backgroundColor }}
            >
                <Text {...{ width: iconSize, height: iconSize}} {...{color}}>
                    <Icon
                        size={iconSize}
                        {...{ name }}
                    />
                </Text>

            </Box>
        </Box>
    )
};

RoundedIcon.defaultProps = {
    iconRatio: 0.7,
    align: "center"
};

export default RoundedIcon
