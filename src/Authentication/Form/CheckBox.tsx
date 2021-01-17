import React from "react";
import {Box, Text} from "../../components/Theme";
import {Feather as Icon} from "@expo/vector-icons";
import {RectButton} from "react-native-gesture-handler";


interface CheckboxProps {
    label: string;
    defaultValue: boolean;
    onChange: () => void;
    checked: boolean;

}

const CheckBox = ({label, onChange, checked }: CheckboxProps) => {
    return (
        <RectButton onPress={() => onChange()} style={{ justifyContent: 'center'}}>
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
                backgroundColor={checked ? "primary" : "white"}>
                <Icon name="check" color='white'/>
            </Box>
            <Text variant="button">{label}</Text>
        </Box>
        </RectButton>
    )
};
export default CheckBox;
