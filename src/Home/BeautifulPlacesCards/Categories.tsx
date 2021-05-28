import React from "react";

import Category from './Category'
import {ScrollView} from "react-native-gesture-handler";
import {View} from "react-native";

const categories = [
    {
        id: 'mountains',
        title: "Горы",
        color: "#FFE8E9"
    },
    {
        id: 'lakes',
        title: "Водоёмы",
        color: "#FFE8E9"
    },
    {
        id: 'bitches',
        title: "Пляж",
        color: "#FFE8E9"
    },
    {
        id: 'architecture',
        title: "Архитектура",
        color: "#FFE8E9"
    },
    {
        id: 'forest',
        title: "Лес",
        color: "#FFE8E9"
    },
    {
        id: 'abadoned',
        title: "Заброшенное",
        color: "#FFE8E9"
    },
    {
        id: 'caves',
        title: "Пещеры",
        color: "#FFE8E9"
    },
    {
        id: 'careers',
        title: "Карьеры",
        color: "#FFE8E9"
    },
]
const Categories = ({filterDataFromChildren}) => {
    return (
        <View style={{backgroundColor: "transparent"}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map(category => (
                    <Category key={category.id} category={category} filterDataFromChildren={filterDataFromChildren}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories
