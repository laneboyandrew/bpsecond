import React, {forwardRef} from "react";

import {Box, RoundedIcon, useTheme} from "../index"
import {Feather as Icon} from "@expo/vector-icons";
import {StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps} from "react-native";

interface TextInputProps extends RNTextInputProps {
    icon: string;
    touched?: boolean;
    error?: string;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(({icon, touched, error, ...props}, ref) => {
        const theme = useTheme();
        const SIZE = theme.borderRadii.m * 2;
        const reColor = !touched ? "text" : error ? "danger" : "primary";
        const color = theme.colors[reColor];

        return (
            <Box flexDirection="row" alignItems="center" height={48} borderRadius="s" borderWidth={StyleSheet.hairlineWidth}
                 borderColor={reColor}>
                <Box padding='s'>
                    <Icon name={icon} size={20} {...{color}} />
                </Box>
                <Box flex={1}>
                    <RNTextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor={color}
                        {...{ref}}
                        {...props}
                    />
                </Box>
                {touched && (
                    <RoundedIcon
                        iconRatio={0.7}
                        name={!error ? "check" : "x"}
                        size={20}
                        color='background'
                        backgroundColor={!error ? 'primary' : 'danger'}
                    />
                )
                }
            </Box>
        );
    }
);

export default TextInput
