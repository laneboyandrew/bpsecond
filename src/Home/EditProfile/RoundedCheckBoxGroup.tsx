import React, {useState} from 'react'
import {Box, Button, Text, useTheme} from "../../components";
import {BorderlessButton} from "react-native-gesture-handler";
import {View} from "react-native";
import {DRAWER_WIDTH} from "../Drawer";

interface RoundedCheckBoxGroup {
    options: { value: string; label: string; color: string; }[];
}


const RoundedCheckBoxGroup = ({options}: RoundedCheckBoxGroup) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return (
        <Box flexDirection="row" flexWrap="wrap" marginTop="s">
            {options.map(({label, value, color}) => {
                const theme = useTheme();
                const index = selectedValues.indexOf(value);
                const isSelected = index !== -1;
                const backgroundColor =
                    isSelected ? color : theme.colors.background2;
                return (
                    <BorderlessButton
                        key={value}
                        onPress={
                            () => {
                                if (isSelected) {
                                    selectedValues.splice(index, 1)
                                } else {
                                    selectedValues.push(value)
                                }
                                setSelectedValues([...selectedValues]);
                            }
                        }
                    >

                            <View style={{
                                width: 80,
                                height: 80,
                                borderRadius: 40,
                                backgroundColor,
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: 30

                            }}>
                                <Text textAlign="center" variant="header">{label}</Text>
                            </View>
                    </BorderlessButton>
                )
            })}
        </Box>
    )
}

export default RoundedCheckBoxGroup
