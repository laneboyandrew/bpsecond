import React from "react";
import {Dimensions, Image, StyleSheet} from "react-native";
import {DrawerContentComponentProps, DrawerContentOptions} from "@react-navigation/drawer/lib/typescript/src/types";
import {Box} from "../components";

const {width} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;


interface DrawerProps {

}

const DrawerContent = () => {
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="white">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius='xl'
                    backgroundColor='secondary'
                />
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor='secondary' />
                <Box flex={1} backgroundColor='primary' />
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        backgroundColor='white'
                        borderTopLeftRadius="xl"
                        borderBottomRightRadius='xl'
                    />
            </Box>
            <Box width={DRAWER_WIDTH}overflow='hidden' height={height * 0.61}>
                <Image  source={require("../../assets/patterns/1.png")}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height: undefined,
                    }}
                />
            </Box>
        </Box>
    )
};
export default DrawerContent

