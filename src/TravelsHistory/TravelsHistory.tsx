import React from "react";

import {HomeNavigationProps} from "../components/Navigation";
import {Box, Header, Text} from "../components";
import Graph from "./Graph"

const data = [
    {
        date: new Date("2020-09-20").getTime(),
        value: 0
    },
    {
        date: new Date("2020-10-20").getTime(),
        value: 0
    },
    {
        date: new Date("2020-11-20").getTime(),
        value: 0
    },
    {
        date: new Date("2020-12-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-01-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-02-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-03-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-04-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-05-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-06-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-07-20").getTime(),
        value: 0
    },
    {
        date: new Date("2021-08-20").getTime(),
        value: 0
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
            <Box >
                <Box flexDirection="row" justifyContent="space-between" alignItems='flex-end'>
                    <Box padding='m'>
                        <Text variant="header" color="secondary" opacity={0.3}>
                            Всего времени проведено в путешествиях:
                        </Text>

                        <Text>
                            10 часов 10 минут
                        </Text>
                    </Box>
                    <Box borderRadius="m" padding="s">
                        <Text color='primary'> Всё время </Text>
                    </Box>
                </Box>
                <Graph data={data} />
            </Box>
        </Box>
    )
}

export default TravelsHistory
