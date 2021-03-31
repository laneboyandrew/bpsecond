import React from "react";
import {Box, Text} from "../../components";
import {ScrollView} from "react-native";
import CheckBoxGroup from "./CheckBoxGroup";

const placesType = [
    { value: 'mountains', label: "Горы"},
    { value: 'sea', label: "Водоёмы"},
    { value: 'forest', label: "Лес"},
    { value: 'steppe', label: "Степь"},
]

const preferredWay = [
    { value: 'bycar', label: "Машина"},
    { value: 'publictransport', label: "Общественный транспорт"},
]

const complexity = [
    {value: 'easy', label: 'Простой'},
    {value: 'medium', label: 'Средний'},
    {value: 'hard', label: 'Сложный'}
]

const Configuration = () => {
    return (
        <ScrollView>
            <Box padding="m">
                <Text>Рельеф</Text>
                <CheckBoxGroup options={placesType} />
                <Text>Как добираетесь?</Text>
                <CheckBoxGroup options={preferredWay} />
                <Text>Сложность маршрута</Text>
                <CheckBoxGroup options={complexity}  />
            </Box>
        </ScrollView>
    )
}

export default Configuration
