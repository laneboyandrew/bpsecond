import React, {useState} from 'react'
import {Box, Button} from "../../components";

interface CheckBoxGroupProps {
    options: { value: string; label: string; }[];
}

const CheckBoxGroup = ({ options }: CheckBoxGroupProps) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    return (
        <Box flexDirection="row" flexWrap="wrap" marginTop="s">
            {options.map(({label, value}) => {
                const index = selectedValues.indexOf(value);
                const isSelected = index !== -1;
                return(
                    <Button
                        key={value}
                        variant={
                            isSelected ? "primary" : "default"
                        }
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
                        label={label}
                        style={{ width: "auto", height: "auto", padding: 20, marginBottom: 4, marginRight: 4 }}
                    />
                )
            })}
        </Box>
    )
}

export default CheckBoxGroup
