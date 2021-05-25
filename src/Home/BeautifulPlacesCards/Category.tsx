import {Feather as Icon} from "@expo/vector-icons";
import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Box, Text} from "../../components";
import BorderlessTap from "../../components/BorderlessTap";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
    category: {
        id: string;
        color: string;
        title: string;
    }
}

const Category = ({
                      category: {color: backgroundColor, title}
                  }: CategoryProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <BorderlessTap onPress={() => setSelected((prev) => !prev)}>
            <Box  marginLeft='m' marginTop="s" alignItems='center'>
                <Box
                    width={OUTER_RADIUS * 2}
                    height={OUTER_RADIUS * 2}
                    justifyContent='center'
                    alignItems='center'

                >
                    {selected && (
                        <View style={{
                            ...StyleSheet.absoluteFillObject,
                            borderRadius: OUTER_RADIUS,
                            borderColor: backgroundColor,
                            borderWidth: 1,
                        }}
                        />
                    )}
                    <View style={{
                        width: INNER_RADIUS * 2,
                        height: INNER_RADIUS * 2,
                        borderRadius: INNER_RADIUS,
                        backgroundColor
                    }}
                    >
                        {selected && (
                            <Icon color='white' size={30} name="check" style={{
                                position: "absolute",
                                marginTop: '30%',
                                marginLeft: '27%',

                            }}/>
                        )
                        }
                    </View>
                </Box>
                <Text textAlign="center" marginTop="s">
                    {title}
                </Text>
            </Box>
        </BorderlessTap>
    )
}
export default Category
