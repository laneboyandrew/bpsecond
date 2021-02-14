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
        title: "Озёра",
        color: "#FFE8E9"
    },
    {
        id: 'bitches',
        title: "Пляжи",
        color: "#FFE8E9"
    },
    {
        id: 'canyons',
        title: "Каньоны",
        color: "#FFE8E9"
    },
    {
        id: 'villages',
        title: "Пещерные города",
        color: "#FFE8E9"
    },
    {
        id: 'caves',
        title: "Пещеры",
        color: "#FFE8E9"
    },
    {
        id: 'grottoes',
        title: "Гроты",
        color: "#FFE8E9"
    },
    {
        id: 'archMonuments',
        title: "Памятники архитектуры",
        color: "#FFE8E9"
    },
]
const Categories = () => {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map(category => (
                    <Category key={category.id} category={category}/>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories
