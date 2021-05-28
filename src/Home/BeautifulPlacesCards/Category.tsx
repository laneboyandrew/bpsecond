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
                      filterDataFromChildren,
                      category: {color: backgroundColor, title, id}
                  }: CategoryProps) => {
    let [selected, setSelected] = useState(false);
    let selectedCategoriesArray = [];

    const buttonPress = () => {
        if (selectedCategoriesArray.includes(id)){
            const index = selectedCategoriesArray.indexOf(id)
            selectedCategoriesArray.splice(index, 1)
            console.log('deleted', selectedCategoriesArray)
        } else {
            selectedCategoriesArray.push(id)
            console.log('newPushed', selectedCategoriesArray)
        }
        setSelected((prev) => !prev)
        sendDataToParent()
        console.log('gggggggggg', selectedCategoriesArray)
    }
    const sendDataToParent = () => {
        filterDataFromChildren(selectedCategoriesArray)
        console.log('selCatArr', selectedCategoriesArray)
    }
    console.log('finish', selectedCategoriesArray)
    return (
        <BorderlessTap onPress={() => buttonPress()}>
            <Box marginLeft='m' marginTop="s" alignItems='center'>
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
