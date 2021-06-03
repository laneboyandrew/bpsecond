import React from "react";

import Category from './Category'
import {ScrollView} from "react-native-gesture-handler";
import {View} from "react-native";

const categories = [
    {
        id: 'mountains',
        title: "Горы",
        color: "#FFE8E9",
        categorySelected: true
    },
    {
        id: 'ponds',
        title: "Водоёмы",
        color: "#FFE8E9",
        categorySelected: true
    },
    {
        id: 'beach',
        title: "Пляж",
        color: "#FFE8E9",
        categorySelected: true

    },
    {
        id: 'architecture',
        title: "Архитектура",
        color: "#FFE8E9",
        categorySelected: true

    },
    {
        id: 'forest',
        title: "Лес",
        color: "#FFE8E9",
        categorySelected: true

    },
    {
        id: 'abandoned',
        title: "Заброшенное",
        color: "#FFE8E9",
        categorySelected: true

    },
    {
        id: 'caves',
        title: "Пещеры",
        color: "#FFE8E9",
        categorySelected: true

    },
    {
        id: 'careers',
        title: "Карьеры",
        color: "#FFE8E9",
        categorySelected: true

    },
    {
        id: 'waterfall',
        title: "Водопады",
        color: "#FFE8E9",
        categorySelected: true
    },
]
const Categories = ({filterDataFromChildren, dataFromChildren, buttonPressed}) => {
    return (
        <View style={{backgroundColor: "transparent"}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map(category => (
                    <Category key={category.id} category={category} filterDataFromChildren={filterDataFromChildren} dataFromChildren={dataFromChildren} buttonPressed={buttonPressed} />
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories
