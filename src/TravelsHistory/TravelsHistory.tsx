import React from "react";

import {HomeNavigationProps} from "../components/Navigation";
import {Box, Header, Text} from "../components";
import Graph, {DataPoint} from "./Graph/Graph"

const data: DataPoint[] = [
    {
        date: new Date("2020-09-20").getTime(),
        value: 0,
        color: 'january'
    },
    {
        date: new Date("2020-10-20").getTime(),
        value: 0,
        color: 'february'
    },
    {
        date: new Date("2020-11-20").getTime(),
        value: 0,
        color: 'march'
    },
    {
        date: new Date("2020-12-20").getTime(),
        value: 0,
        color: 'april'
    },
    {
        date: new Date("2021-01-20").getTime(),
        value: 0,
        color: 'may'
    },
    {
        date: new Date("2021-02-20").getTime(),
        value: 0,
        color: 'june'
    },
    {
        date: new Date("2021-03-20").getTime(),
        value: 0,
        color: 'july'
    },
    {
        date: new Date("2021-04-20").getTime(),
        value: 0,
        color: 'august'
    },
    {
        date: new Date("2021-05-20").getTime(),
        value: 0,
        color: 'september'
    },
    {
        date: new Date("2021-06-20").getTime(),
        value: 0,
        color: 'october'
    },
    {
        date: new Date("2021-07-20").getTime(),
        value: 0,
        color: 'november'
    },
    {
        date: new Date("2021-08-20").getTime(),
        value: 114,
        color: 'december'
    },
    // {
    //     date: new Date("2021-02-20").getTime(),
    //     value: 5,
    //     color: 'primary'
    // },
    // {
    //     date: new Date("2021-03-20").getTime(),
    //     value: 6,
    //     color: 'primary'
    // },
    // {
    //     date: new Date("2021-04-20").getTime(),
    //     value: 7,
    //     color: 'primary'
    // },
    // {
    //     date: new Date("2021-05-20").getTime(),
    //     value: 80,
    //     color: 'primary'
    // },
    // {
    //     date: new Date("2021-06-20").getTime(),
    //     value: 90,
    //     color: 'primary'
    // },
    // {
    //     date: new Date("2021-07-20").getTime(),
    //     value: 100,
    //     color: 'primary'
    // },
    // {
    //     date: new Date("2021-08-20").getTime(),
    //     value: 110,
    //     color: 'primary'
    // },
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
                <Graph data={data} />
            </Box>
        </Box>
    )
}

export default TravelsHistory
