import React from "react";

import {HomeNavigationProps} from "../components/Navigation";
import {Box, Header, makeStyles, Text, useTheme} from "../components";
import Graph, {DataPoint} from "./Graph/Graph"
import {ScrollView, Image, StyleSheet, Dimensions, PixelRatio} from "react-native";
import Travel from './Travel';
import {Theme} from "../components/Theme";
import TopCurve from "./TopCurve";

const footerHeight = Dimensions.get("window").width / 3.3
const startDate = new Date("2021-01-01").getTime();
const numberOfMonths = 12;
const aspectRatio = 3;

const useStyles = makeStyles((theme: Theme) => ({
        footer: {
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl
        },
        scrollView: {
            paddingBottom: footerHeight
        }
    })
);


//TODO: на сервере необходимо будет суммировать
// количество часов по каждому месяцу и  отдавать
// для графика единым значением иначе будет несколько
// разных штрихов на одном месяце То есть количество часов
// каждого нового путешествия прибавляется к пердыдущим путешествия в этом месяце
// Или свыводится сумма всех путешествий за месяц они все равно необходиы для истории
const data: DataPoint[] = [
    {
        date: new Date("2021-01-16").getTime(),
        value: 114,
        color: 'january',
        id: 1
    },
    {
        date: new Date("2021-02-05").getTime(),
        value: 100,
        color: 'february',
        id: 2
    },
    {
        date: new Date("2021-03-08").getTime(),
        value: 501.3,
        color: 'march',
        id: 3
    },
    {
        date: new Date("2021-11-08").getTime(),
        value: 300,
        color: 'november',
        id: 4
    },
]


const TravelsHistory = ({navigation}: HomeNavigationProps<"TravelsHistory">) => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <Box flex={1} backgroundColor='background'>
            <Header title='История путешествий'
                    left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
                    right={{icon: 'share', onPress: () => true}}
                    dark={false}
            />
            <Box padding='s' flex={1}>
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
                <Graph data={data} startDate={startDate} numberOfMonths={numberOfMonths}/>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {data.map(travel => (
                        <Travel key={travel.id} travel={travel}/>
                    ))}
                </ScrollView>
            </Box>
            <TopCurve {...{ footerHeight }}/>
            <Box
                position="absolute"
                left={0}
                right={0}
                bottom={0}
                height={footerHeight}
            >
                <Image style={styles.footer} source={require("../../assets/patterns/3.png")}/>
            </Box>
        </Box>
    )
}

export default TravelsHistory
