import React, {forwardRef} from "react";

import {Box, useTheme} from "../../components"
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
                    <Icon name={icon} size={16} {...{color}} />
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
                    <Box paddingRight='s'>
                        <Box
                            height={SIZE}
                            width={SIZE}
                            borderRadius='m'
                            backgroundColor={!error ? 'primary' : 'danger'}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Icon name={!error ? "check" : "x"} color="white" size={16}/>
                        </Box>
                    </Box>
                )
                }
            </Box>
        );
    }
);

export default TextInput
