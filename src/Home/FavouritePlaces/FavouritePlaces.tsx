import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Box, Header, useTheme} from "../../components";
import {Dimensions, ScrollView, View} from "react-native";
import {HomeNavigationProps} from "../../components/Navigation";
import Footer from './Footer';
import Picture from './Picture';
import {Transition, Transitioning, TransitioningView} from "react-native-reanimated";
import TopCurve from "./TopCurve";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {array} from "yup";
import {StatusBar} from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import ModalWindow from "../Map/ModalWindow";
import {LinearGradient} from "expo-linear-gradient";

const {width: wWidth, height} = Dimensions.get('window')
const initialMarker = {
    title: 'Выберите любой маркер на карте',
    description: 'Вам станет доступно описание места'
}

const FavouritePlaces = ({navigation}: HomeNavigationProps<"FavouritePlaces">) => {
    const isFocused = useIsFocused();
    const [markers, setMarkers] = useState([]);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [currentMarker, setCurrentMarker] = useState(initialMarker);
    const [navigationDestination, setCurrentNavigationDestination] = useState(null);
    const [currentUserLocation, setCurrentUserLocation] = useState(null);
    const [navigate, setNavigate] = useState(false);

    const sendStartProcessToParent = (value) => { // the callback. Use a better name
        onMarkerPress(value);
    };
    const onMarkerPress = (marker) => {
        setShowModalWindow(true);
        setCurrentMarker(marker);
    }
    const sendDataToParent = (index) => { // the callback. Use a better name
        setShowModalWindow(index);
    };
    const navigateToPlace = (index, coordinates) => {
        setNavigate(index);
        setCurrentNavigationDestination(coordinates);
    }

    useEffect(() => {
        const getFavourites = async () => {
            let keys = []
            try {
                keys = await AsyncStorage.getAllKeys()
            } catch (e) {
                // read key error
            }
            let values
            try {
                let forDeletion = ['__react_native_storage_test', 'NAVIGATION_STATE_KEY-40.0.0', 'markers', 'allplaces'];
                keys = keys.filter(item => !forDeletion.includes(item))
                values = await AsyncStorage.multiGet(keys)
                setMarkers(values)
            } catch (e) {
                // read error
            }
        }
        getFavourites();
    }, [isFocused, showModalWindow])
    const transition = (
        <Transition.Together>
            <Transition.Out type='fade'/>
            <Transition.In type='fade'/>
        </Transition.Together>
    );

    const list = useRef<TransitioningView>(null);
    const theme = useTheme()
    const width = (wWidth - theme.spacing.m * 3) / 2;
    const [footerHeight, setFooterHeight] = useState(0);
    return (
        <Box flex={1} backgroundColor="background">
            {isFocused ? <StatusBar style="dark" /> : undefined}
            <Header
                title="Избранные места"
                left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
                right={{icon: 'shopping-bag', onPress: () => true}}
            />
            <Box flex={1}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    paddingBottom: footerHeight,

                }}>
                    <Transitioning.View ref={list} transition={transition} style={{}}>
                        {markers ?
                            <Box flexDirection='row' style={{justifyContent: "space-around"}}>
                                <Box>
                                    {markers
                                        .filter((_, i) => i % 2 === 0).map((currentMarker) => <Picture
                                            sendStartProcessToParent={sendStartProcessToParent}
                                            key={currentMarker}
                                            place={currentMarker}
                                            width={width}
                                            height={height}
                                        />)}
                                </Box>
                                <Box>
                                    {markers
                                        .filter((_, i) => i % 2 !== 0).map((currentMarker) => <Picture
                                            sendStartProcessToParent={sendStartProcessToParent}
                                            key={currentMarker}
                                            place={currentMarker}
                                            width={width}
                                            height={height}/>)}
                                </Box>
                            </Box> : undefined}
                    </Transitioning.View>
                </ScrollView>
                <ModalWindow navigateToPlace={navigateToPlace} sendDataToParent={sendDataToParent} visible={showModalWindow}
                             marker={currentMarker}/>
                {/*<TopCurve footerHeight={footerHeight}/>*/}
                <Box position='absolute' bottom={0} left={0} right={0} onLayout={({
                                                                                      nativeEvent: {
                                                                                          layout: {height},
                                                                                      }
                                                                                  }) => setFooterHeight(height)}>
                    {/* Фильтрует исходя из выбранных картинок в компоненте Picture. Из Picture возвращается информация о том выбрана картинка или нет:
                    picture.selected = !picture.selected; и после этого не выбранные картинки сохраняются в текущий стейт pictures выбранные удаляются
                    При использовании сервера заменю на подгрузку картинок из избранного текущего пользователя*/}
                    {/*<Footer label="Обновить" onPress={() => {*/}
                    {/*        getFavourites()*/}
                    {/*    // list.current?.animateNextTransition();*/}
                    {/*    // setPlaces(places.filter((place => !place.selected)))*/}
                    {/*    // console.log(defaultPictures)*/}
                    {/*}}/>*/}

                </Box>
            </Box>
        </Box>
    )
}
export default FavouritePlaces
