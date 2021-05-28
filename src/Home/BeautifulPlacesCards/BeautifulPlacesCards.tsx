import React, {useCallback, useEffect, useRef, useState} from "react";
import Categories from "./Categories"

import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {BorderlessTap, Box, Header, RoundedIconButton} from "../../components";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Dimensions,
    PixelRatio,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback, TouchableOpacityComponent, TouchableHighlight, Button
} from "react-native";
import {backgroundColor} from "@shopify/restyle";
import { LinearGradient } from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";
import CustomCarousel from "../Map/CustomCarousel";
import AppLoading from "expo-app-loading";
import Category from "./Category";
import Carousel from "react-native-snap-carousel";
import ModalWindow from "../Map/ModalWindow";
import {Image} from "react-native-expo-image-cache";


const cards = [
    {
        source: require("../../../assets/introduceImages/4.jpg")
    },
    {

        source: require("../../../assets/introduceImages/3.jpg")
    },
    {

        source: require("../../../assets/introduceImages/2.jpg")
    },
    {
        source: require("../../../assets/introduceImages/1.jpg")
    }
]
const initialMarker = {
    title: 'Выберите любой маркер на карте',
    description: 'Вам станет доступно описание места'
}
const footerHeight = PixelRatio.roundToNearestPixel(Dimensions.get("window").width / 3.3)
const step = 1/(cards.length - 1);
const BeautifulPlacesCards = ({ navigation }: HomeNavigationProps<"BeautifulPlacesCards">) => {
    let filterState = false;
    let oldFilterState = false;
    const huinya = 'huinya';
    const [markers, setMarkers] = useState([]);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [currentMarker, setCurrentMarker] = useState(initialMarker);
    const [navigationDestination, setCurrentNavigationDestination] = useState(null);
    const [showPlaceType, setShowPlaceType] = useState(undefined);
    const [navigate, setNavigate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    let [originalData, setData] = useState([]);
    let [filteredData, setFilteredData] = useState(undefined);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const {width, height} = Dimensions.get("window");
    fetch('https://beautiful-places.ru/api/places')
        .then((response) => response.json())
        .then((json) => setData(json))
        .then(() =>
            console.log('jsonData', originalData))
        .catch((error) => console.error(error));
    useEffect(() => {
        if(oldFilterState != filterState) {
            let filtered = originalData.filter(place => place.type == filterState)
            filterState ? setFilteredData(filtered) : setFilteredData(originalData)
            oldFilterState = filterState
        }
    }, [filterState]);
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
    const filterDataFromChildren = (index) => {
        console.log('infoINX', index[0])
        if(filterState != index[0])
            filterState = index[0];
    };
    interface ItemProps {
        title: string;
        text: string;
    }
    interface RenderItemProps {
        item: ItemProps;
        index: number;
    }
    const ref = useRef(null);

    const preview = { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" };
    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
    <TouchableWithoutFeedback onPress={() => onMarkerPress(item)}>
        <View>
            <Image {...{uri: item.images[0].image, preview}}
                style={{
                    backgroundColor: "floralwhite",
                    borderRadius: 5,
                    height: '80%',
                    width: width/1.4,
                }}
            />
        </View>
    </TouchableWithoutFeedback>
        );
    }, []);
    //console.log('startData' , originalData);
    return (
        <LinearGradient colors={['#051345', '#fa3c01']}>
        <View>
        <Header
            title="Карточки мест"
            left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
            right={{ icon: 'shopping-bag', onPress: () => true }}
        />
    <Categories filterDataFromChildren={filterDataFromChildren} data={originalData} />
        </View>
            <View style={{ marginTop: '10%', height: "80%", justifyContent: "center", alignSelf: "center",  alignItems: "center" }}>
               <Carousel
                    layout={"default"}
                    style={{ }}
                    ref={ref}
                    data={filteredData ? filteredData : originalData}
                    sliderWidth={width}
                    itemWidth={width/1.4}
                    renderItem={renderItem}
                    onSnapToItem={(index: number) => setActiveIndex(index)}
                />
            </View>
            <ModalWindow navigateToPlace={navigateToPlace} sendDataToParent={sendDataToParent} visible={showModalWindow}
                         marker={currentMarker}/>
        </LinearGradient>

    )}

export default BeautifulPlacesCards;
