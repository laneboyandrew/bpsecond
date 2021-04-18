import React from "react";
import {Box, Text} from "../../components";
import {ScrollView} from "react-native";
import CheckBoxGroup from "./CheckBoxGroup";
import RoundedCheckBoxGroup from './RoundedCheckBoxGroup';

const placesType = [
    { value: 'mountains', label: "Горы", color: 'darkblue'},
    { value: 'sea', label: "Водоёмы", color: 'powderblue'},
    { value: 'forest', label: "Лес", color: "darkgreen"},
    { value: 'steppe', label: "Степь", color: 'orange'},
]

const preferredWay = [
    { value: 'bycar', label: "Машина", color: 'yellow'},
    { value: 'publictransport', label: "Общественный транспорт", color: 'yellow'},
]

const complexity = [
    {value: 'easy', label: 'Простой', color: 'green'},
    {value: 'medium', label: 'Средний', color: 'yellow'},
    {value: 'hard', label: 'Сложный', color: 'red'}
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
                <RoundedCheckBoxGroup options={complexity}  />
            </Box>
        </ScrollView>
    )
}

export default Configuration
