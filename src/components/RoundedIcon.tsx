import React from "react";
import {Feather as Icon} from "@expo/vector-icons";
import {Box, Theme, Text} from "./Theme";


interface RoundedIconProps {
    name: string;
    size: number;
    color: keyof Theme['colors'];
    backgroundColor: keyof Theme['colors'];
}
const RoundedIcon = ({
                         name,
                         size,
                         color,
                         backgroundColor
    }: RoundedIconProps) => {
    const iconSize = size * 0.8;
    return(
        <Box paddingRight='s'>
            <Box
                height={size}
                width={size}
                borderRadius='xl'
                justifyContent='center'
                alignItems='center'
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

export default RoundedIcon
