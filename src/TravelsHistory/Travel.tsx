import React from "react";
import {DataPoint} from "./Graph";
import {Box, Text} from "../components";
import {splitTime} from "./Graph/Scale";

interface TravelProps {
    travel: DataPoint;
}

const Travel = ({travel}: TravelProps) => {
    const timeResult = splitTime(travel.value)
    return (
        <Box>
            <Box>
                <Box>
                    <Box backgroundColor={travel.color}
                        style={{ width: 10, height: 10, borderRadius: 5 }}
                    />
                    <Text variant="title3">{`#${travel.id}`}</Text>
                </Box>
                <Text>
                    {`${timeResult.Days} дней ${timeResult.Hours} часов ${timeResult.Minutes} минут- ${new Date(travel.date).toLocaleDateString()}`}
                </Text>
            </Box>
            <Box>
                <Text color='secondary'> Подробнее </Text>
            </Box>
        </Box>
    )
}
export default Travel
