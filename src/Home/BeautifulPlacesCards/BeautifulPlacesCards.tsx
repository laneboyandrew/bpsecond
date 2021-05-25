import React, {useCallback, useEffect, useRef, useState} from "react";
import Categories from "./Categories"

import {HomeNavigationProps} from "../../components/Navigation";
import Background from "./Background";
import Card from "./Card";
import {Box, Header, RoundedIconButton} from "../../components";

import {
    Dimensions,
    PixelRatio,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";
import {backgroundColor} from "@shopify/restyle";
import { LinearGradient } from 'expo-linear-gradient';
import {StatusBar} from "expo-status-bar";
import CustomCarousel from "../Map/CustomCarousel";
import AppLoading from "expo-app-loading";
import Category from "./Category";
import Carousel from "react-native-snap-carousel";
import ModalWindow from "../Map/ModalWindow";


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
    const [markers, setMarkers] = useState([]);
    const [showModalWindow, setShowModalWindow] = useState(false);
    const [currentMarker, setCurrentMarker] = useState(initialMarker);
    const [navigationDestination, setCurrentNavigationDestination] = useState(null);
    const [currentUserLocation, setCurrentUserLocation] = useState(null);
    const [navigate, setNavigate] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const {width, height} = Dimensions.get("window");
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
    interface ItemProps {
        title: string;
        text: string;
    }

    interface CustomCarouselProps {}
    interface RenderItemProps {
        item: ItemProps;
        index: number;
    }

    const exampleItems = [
        {
            title: "Item 1",
            text: "Text 1",
        },
        {
            title: "Item 2",
            text: "Text 2",
        },
        {
            title: "Item 3",
            text: "Text 3",
        },
        {
            title: "Item 4",
            text: "Text 4",
        },
        {
            title: "Item 5",
            text: "Text 5",
        },
    ];
    const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
    const ref = useRef(null);
    useEffect(() => {
        fetch('http://beautiful-places.ru/api/places')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, [])
    console.log('CData', data)
    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
    <TouchableWithoutFeedback onPress={() => onMarkerPress(item)}>
            <Image source={{uri: item.images[0].image}}
                style={{
                    backgroundColor: "floralwhite",
                    borderRadius: 5,
                    height: '60%',
                    width: width/1.4,
                }}
            />
    </TouchableWithoutFeedback>
        );
    }, []);
    return (
        <LinearGradient colors={['#051345', '#fa3c01']}>
        <View>
        <Header
            title="Карточки мест"
            left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
            right={{ icon: 'shopping-bag', onPress: () => true }}
        />
    <Categories />
        </View>
            <View style={{ marginTop: '10%', height: "80%", justifyContent: "center", alignSelf: "center",  alignItems: "center" }}>

    <Carousel
        layout={"default"}
        style={{ }}
        ref={ref}
        data={data}
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
