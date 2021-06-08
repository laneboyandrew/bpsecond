import React from "react";

import Category from './Category'
import {ScrollView} from "react-native-gesture-handler";
import {View} from "react-native";

const images = {
    mountains: {
        uri: require( '../../../assets/images/mountain.png')
    },
    ponds: {
        uri: require('../../../assets/images/pond.png')
    },
    beach: {
        uri: require('../../../assets/images/beach.png')
    },
    architecture: {
        uri: require('../../../assets/images/architecture.png')
    },
    forest: {
        uri: require('../../../assets/images/forest.png')
    },
    abandoned: {
        uri: require('../../../assets/images/abandoned.png')
    },
    caves: {
        uri: require('../../../assets/images/cave.png')
    },
    careers: {
        uri: require('../../../assets/images/career.png')
    },
    waterfall: {
        uri: require('../../../assets/images/waterfall.png')
    }
}

export {images};

const categories = [
    {
        id: 'mountains',
        title: "Горы",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'ponds',
        title: "Водоёмы",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'beach',
        title: "Пляжи",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'architecture',
        title: "Архитектура",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'forest',
        title: "Леса",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'abandoned',
        title: "Заброшенное",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'caves',
        title: "Пещеры",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'careers',
        title: "Карьеры",
        color: "#FFE8E9",
        categorySelected: true,
    },
    {
        id: 'waterfall',
        title: "Водопады",
        color: "#FFE8E9",
        categorySelected: true,
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
