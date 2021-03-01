import React from "react";
import {Box, Text} from "../Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {BorderlessButton} from "react-native-gesture-handler";


interface CheckboxProps {
    label: string;
    defaultValue: boolean;
    onChange: () => void;
    checked: boolean;

}

const CheckBox = ({label, onChange, checked }: CheckboxProps) => {
    return (
        <BorderlessButton onPress={() => onChange()} style={{ justifyContent: 'center'}}>
        <Box flexDirection="row" alignItems='center'>
            <Box
                marginRight='s'
                height={20}
                width={20}
                alignItems='center' /* Выравнивание по ширине */
                justifyContent='center' /* Выравнивание по высоте */
                borderRadius="s"
                borderWidth={1}
                borderColor='primary'
                backgroundColor={checked ? "primary" : "background"}>
                <Icon name="check" color='background'/>
            </Box>
            <Text variant="button">{label}</Text>
        </Box>
        </BorderlessButton>
    )
};
export default CheckBox;
