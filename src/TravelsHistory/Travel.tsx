import React from "react";
import {DataPoint} from "./Graph";
import {Box, Text} from "../components";
import {splitTime} from "./Graph/Scale";
import moment from "moment";
import 'moment/locale/ru'

interface TravelProps {
    travel: DataPoint;
}
moment.locale('ru');
const Travel = ({travel}: TravelProps) => {
    const timeResult = splitTime(travel.value)
    return (
        <Box marginTop='xl' flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box>
                <Box flexDirection="row" alignItems="center" marginBottom="s">
                    <Box marginRight='s' backgroundColor={travel.color}
                        style={{ width: 10, height: 10, borderRadius: 5 }}
                    />
                    <Text variant="title3">{`#${travel.id}`}</Text>
                </Box>
                <Text color='darkGrey'>
                    {`${timeResult.Days} дней ${timeResult.Hours} часов ${timeResult.Minutes} минут -
                     ${moment(travel.date).format("DD MMMM YYYY") }`}
                </Text>
            </Box>
            <Box>
                <Text color='secondary' variant="button"> Подробнее </Text>
            </Box>
        </Box>
    )
}
export default Travel
