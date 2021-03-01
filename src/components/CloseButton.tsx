import React from "react";
import {Box, Text} from "./Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";
import {Dimensions} from "react-native";
const SIZE = 60;
interface CloseButtonProps {
    onPress: () => void;
}

const CloseButton = ({onPress}: CloseButtonProps) => {
    return (
        <RectButton {...{ onPress }}>
            <Box style={{height: SIZE, width: SIZE, borderRadius: SIZE/2}} backgroundColor='background'
                 justifyContent="center" alignItems="center">
                <Text color='secondary'>
                    <Icon name='x' size={45}/>
                </Text>
            </Box>
        </RectButton>
    )
};

export default CloseButton;
