import {Feather as Icon} from "@expo/vector-icons";
import React, {useState} from "react";
import {View, StyleSheet, Image} from "react-native";
import {Box, Text} from "../../components";
import BorderlessTap from "../../components/BorderlessTap";
import  {images} from "./Categories";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
    category: {
        id: string;
        color: string;
        title: string;
        iconPath: string;
    }
}

const Category = ({
                      filterDataFromChildren,
                      buttonPressed,
                      dataFromChildren,
                      category: {color: backgroundColor, title, id, iconPath}
                  }: CategoryProps) => {
    let [selected, setSelected] = useState(true);
    const initialArray = ['mountains', 'ponds', 'beach', 'architecture', 'forest', 'abandoned', 'caves', 'careers', 'waterfall'];
    let [categoriesArray, setCategoriesArray] = useState(initialArray);
    let [resultArray, setResultArray] = useState(undefined);

    const buttonPress = async () => {
        buttonPressed(id)
        setSelected((prev) => !prev)
        }
    console.log('iconPath', iconPath)
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
                        <Image style={{marginTop: "20%", alignSelf: "center", height: 35, width: 35}}
                               source={images[id].uri}/>

                    </View>
                </Box>
                <Text style={{color: "white"}} textAlign="center" marginTop="s">
                    {title}
                </Text>
            </Box>
        </BorderlessTap>
    )
}
export default Category
