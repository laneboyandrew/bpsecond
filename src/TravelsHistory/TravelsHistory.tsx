import React from "react";

import {HomeNavigationProps} from "../components/Navigation";
import {Box, Header, Text} from "../components";
import Graph, {DataPoint} from "./Graph/Graph"
import {ScrollView} from "react-native";
import Travel from './Travel';
const minDate = new Date("2020-01-01").getTime();
const maxDate = new Date("2021-12-30").getTime();


const data: DataPoint[] = [
    {
        date: new Date("2020-09-20").getTime(),
        value: 0,
        color: 'january',
        id: 0
    },
    {
        date: new Date("2020-10-20").getTime(),
        value: 0,
        color: 'february',
        id: 0
    },
    {
        date: new Date("2020-11-20").getTime(),
        value: 0,
        color: 'march',
        id: 0
    },
    {
        date: new Date("2020-12-20").getTime(),
        value: 0,
        color: 'april',
        id: 0
    },
    {
        date: new Date("2021-01-20").getTime(),
        value: 0,
        color: 'may',
        id: 0
    },
    {
        date: new Date("2021-02-20").getTime(),
        value: 0,
        color: 'june',
        id: 0
    },
    {
        date: new Date("2021-03-20").getTime(),
        value: 0,
        color: 'july',
        id: 0
    },
    {
        date: new Date("2021-04-20").getTime(),
        value: 0,
        color: 'august',
        id: 0
    },
    {
        date: new Date("2021-05-20").getTime(),
        value: 0,
        color: 'september',
        id: 0
    },
    {
        date: new Date("2021-06-20").getTime(),
        value: 0,
        color: 'october',
        id: 0
    },
    {
        date: new Date("2021-07-20").getTime(),
        value: 0,
        color: 'november',
        id: 0
    },
    {
        date: new Date("2021-08-20").getTime(),
        value: 114,
        color: 'december',
        id: 1
    },
]


const TravelsHistory = ({ navigation }: HomeNavigationProps<"TravelsHistory">) => {
    return (
        <Box flex={1} backgroundColor="white">
            <Header title='История путешествий'
                    left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
                    right={{ icon: 'share', onPress: () => true }}
                    dark={false}
            />
            <Box padding='m'>
                <Box flexDirection="row" justifyContent="space-between" alignItems='flex-end'>
                    <Box>
                        <Text variant="header" color="secondary" opacity={0.3}>
                            ВРЕМЯ В ПУТЕШЕСТВИЯХ:
                        </Text>

                        <Text>
                            10 часов 10 минут
                        </Text>
                    </Box>
                    <Box backgroundColor='primaryLight' borderRadius="m" padding="s">
                        <Text color='primary'> Всё время </Text>
                    </Box>
                </Box>
                <Graph data={data} minDate={minDate} maxDate={maxDate}/>
                <ScrollView>
                    {data.map(travel => (
                        <Travel key={travel.id} travel={travel} />
                    ))}
                </ScrollView>
            </Box>
        </Box>
    )
}

export default TravelsHistory
