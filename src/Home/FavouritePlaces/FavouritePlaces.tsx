import React, {useState} from "react";
import {Box, Header, useTheme} from "../../components";
import {Dimensions, ScrollView, View} from "react-native";
import {HomeNavigationProps} from "../../components/Navigation";
import Footer from './Footer';
import Picture from './Picture';

const {width: wWidth} = Dimensions.get('window')
const defaultPictures = [
    {
        id: 1,
        color: "#BFEAF5",
        aspectRatio: 1,
        selected: false,
    },
    {
        id: 2,
        color: "red",
        aspectRatio: 200 / 145,
        selected: false,
    },
    {
        id: 3,
        color: "green",
        aspectRatio: 150 / 145,
        selected: false,
    },
    {
        id: 4,
        color: "yellow",
        aspectRatio: 150 / 145,
        selected: false,
    },
    {
        id: 5,
        color: "orange",
        aspectRatio: 1,
        selected: false,
    },
    {
        id: 6,
        color: "powderblue",
        aspectRatio: 150 / 145,
        selected: false,
    },
    {
        id: 7,
        color: "pink",
        aspectRatio: 210 / 145,
        selected: false,
    },
    {
        id: 8,
        color: "violet",
        aspectRatio: 160 / 145,
        selected: false,
    },
    {
        id: 9,
        color: "brown",
        aspectRatio: 160 / 145,
        selected: false,
    },
    {
        id: 10,
        color: "grey",
        aspectRatio: 1,
        selected: false,
    },
]
const FavouritePlaces = ({navigation}: HomeNavigationProps<"FavouritePlaces">) => {
    const theme = useTheme()
    const width = (wWidth - theme.spacing.m * 3) / 2;
    const [footerHeight, setFooterHeight] = useState(0);
    const [pictures, setPictures] = useState(defaultPictures);

    return (
        <Box flex={1} backgroundColor="white">
            <Header
                title="Избранные места"
                left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
                right={{icon: 'shopping-bag', onPress: () => true}}
            />
            <Box flex={1}>
                <ScrollView contentContainerStyle={{
                    paddingHorizontal: theme.spacing.m,
                    paddingBottom: footerHeight
                }}>
                    <Box flexDirection='row'>
                        <Box marginRight='s'>
                            {pictures.filter((_, i) => i % 2 !== 0).map((picture) => <Picture key={picture.id}
                                                                                              picture={picture}
                                                                                              width={width}/>)}
                        </Box>
                        <Box>
                            {pictures.filter((_, i) => i % 2 === 0).map((picture) => <Picture key={picture.id}
                                                                                              picture={picture}
                                                                                              width={width}/>)}
                        </Box>
                    </Box>
                </ScrollView>
                <Box position='absolute' bottom={0} left={0} right={0} onLayout={({
                    nativeEvent: {
                        layout: { height },
                    }
                }) => setFooterHeight(height)}>
                    {/* Фильтрует исходя из выбранных картинок в компоненте Picture из Picture возвращается информация о том выбрана картинка или нет:
                    picture.selected = !picture.selected; и после этого не выбранные картинки сохраняются в текущий стейт pictures остальные удаляются
                    При использовании сервера заменюна подгрузку картинок из избранного текущего пользователя*/}
                    <Footer label="Удалить из избранного" onPress={() => {
                        setPictures(pictures.filter((picture => !picture.selected)))
                        // console.log(defaultPictures)
                    }}/>

                </Box>
            </Box>

        </Box>
    )
}
export default FavouritePlaces
